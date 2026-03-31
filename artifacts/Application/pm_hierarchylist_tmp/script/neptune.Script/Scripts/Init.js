neptune.Shell.attachInit(function (data, navObj) {
    let showHistory = true;
    let external = false;
    if (data) {
        if (data.external === true) {
            oTreeTable.setSelectionMode("Single");
            btnSelect.setVisible(true);
            butScan.setVisible(false);
            //window.showHistory = false;
            showHistory = false;
            external = true;
        }
    } else {
        // oTreeTable.setSelectionMode("Single");
        oBarFooter.setVisible(false);
    }
    modelInit.setProperty("/showHistory", showHistory);
    modelInit.setProperty("/external", external);

});
