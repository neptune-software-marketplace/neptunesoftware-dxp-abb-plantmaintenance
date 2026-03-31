App.setBusy(false);

modelscan.setData(xhr.responseJSON.result);

//Show messages pushed back from SAP
if (modelmessageBox.oData) {
    //error
    //We don't want to use the dialog here or else it gets stuck!
    // globalMessageType = modelmessageBox.oData[0].TYPE;
    // messages.setState(modelmessageBox.oData[0].TYPE);
    // messages.open();

    sap.m.MessageToast.show(modelmessageBox.oData[0].MESSAGE);
} else {
    //success
    let notification = modelPageNotification.oData;
    let equipment = modelscan.oData;

    lblAsset.setText(equipment.EQUIP_DESC);
    lblLocation.setText(equipment.FLOC_DESC);
    notification.FUNCT_LOC = equipment.FUNCT_LOC;
    notification.EQUIPMENT = equipment.EQUNR.toString().replace(/^0+/, "");

    modelPageNotification.setData(notification);

    scan.close();
    isUserScanning = false;
}
