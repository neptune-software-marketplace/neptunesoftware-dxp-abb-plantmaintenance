//Clear states
txtLocation.setValueState();
txtAsset.setValueState();
txtSubject.setValueState();

//Validate Equipment and/or Location
if (txtLocation.getValue().toString() === '' && txtAsset.getValue().toString() === '') {
    sap.m.MessageToast.show("Please choose a Location or an Asset");

    if (txtLocation.getValue().toString() === '') {
        txtLocation.setValueState("Error")
    }
    if (txtAsset.getValue().toString() === '') {
        txtAsset.setValueState("Error")
    }
    return;
}

//Validate Subject
if (txtSubject.getValue().toString() === '') {
    sap.m.MessageToast.show("Please add a Subject for this issue");
    txtSubject.setValueState("Error")
    return;
}

//Create Notification
App.setBusy(true);

var options = {
  parameters: {
    $select: "", // Optional
    "sap-client": "", // Required
    $RFCDEST: "", // Optional
  },
  data: {
    MT_IMAGES: modellstImages.oData,

    MS_NOTIFICATION: modelPageNotification.oData,
  },
};

apiCREATE_NOTIFICATION(options);