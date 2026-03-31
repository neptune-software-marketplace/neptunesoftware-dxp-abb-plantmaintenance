let PARENT_DESC = '';
if (oTreeTable.getSelectedIndex() === -1) {
    sap.m.MessageToast.show("Please select a valid line");
    return;
}

//Get line object
let data = oTreeTable.getContextByIndex(oTreeTable.getSelectedIndex()).getObject();


//If Equipment, retrieve Location description
if (data.OBJECT_TYPE === 'E') {
    //convert Nested to Flat
    let treeData = neptune.Utils.convertNestedToFlat(modeloTreeTable.oData);

    $.each(treeData, function(i, tobject) {
        if (tobject.OBJECT === data.PREDECESSOR) {
            PARENT_DESC = tobject.DESCRIPTION;
            return false;
        }
    });
}

console.log(PARENT_DESC);

sap.n.PMNotification.receiveTechnicalObject(data.OBJECT, data.OBJECT_TYPE, data.DESCRIPTION, data.PREDECESSOR, PARENT_DESC);

//sap.n.Shell.closeTile(sap.n.Launchpad.currentTile);
AppCacheNav.back();