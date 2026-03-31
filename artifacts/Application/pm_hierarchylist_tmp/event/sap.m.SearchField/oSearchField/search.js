if (oEvent.getParameter("clearButtonPressed")) {
    return;
}
var search = this.getValue().toUpperCase();

// Replace yourList with Table Name
// Replace FIELD and VALUE

var binding = oTreeTable.getBinding("rows");

var filter = new sap.ui.model.Filter("SEARCHFIELD", "Contains", search);

// Blocks the entire screen
// oApp.setBusyIndicatorDelay(0);
// oApp.setBusy(true);

// setTimeout(function() {
    try {
        binding.filter([filter]);
    }
    catch ( e ) {

    }
    finally {
        //
        // Resets the last selection if any
        let ltRows            = oTreeTable.getBinding("rows");
        let lvHighestSelected = 0;
        let lvFoundSelection  = -1;
        if (ltRows.getLength()) {
            for (let lvIndex = 0; lvIndex < ltRows.getLength(); lvIndex++) {
                var loData = ltRows.getContextByIndex(lvIndex).getObject();
                if (loData && (!isNaN(loData.SELECTED)) && loData.SELECTED > lvHighestSelected) {
                    if ( lvIndex < 10 ) {
                        console.log(loData.SELECTED);
                    };
                    lvHighestSelected = loData.SELECTED;
                    lvFoundSelection  = lvIndex;
                }
            }
        }
        console.log("found: "+lvFoundSelection);
        try {
            if (lvHighestSelected === gvLastSelectedIndexTime) {
                oTreeTable.setSelectedIndex( lvFoundSelection );
            }
        } catch (e) {}
    }

    if (search.trim() === "") {
        //
        // The filter was removed. Focus on the SELECTED item
        if ( oTreeTable.getSelectedIndex() >= 0 ) {
            let lvTopIndex = (oTreeTable.getSelectedIndex() < 5) ? 0 : oTreeTable.getSelectedIndex() - 5;
            oTreeTable.setFirstVisibleRow( lvTopIndex );
        } else {
            oTreeTable.collapseAll();
        }
    }
    else {
        oTreeTable.expandToLevel(99);
    }
    // setTimeout( function() {
        oApp.setBusy(false);
    // }, 100);
// }, 100);
