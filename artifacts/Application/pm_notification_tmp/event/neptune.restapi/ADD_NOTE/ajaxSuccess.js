App.setBusy(false);

var options = {
  parameters: {
    $select: "", // Optional
    "sap-client": "", // Required
    I_QMNUM: modelPageNotification.oData.QMNUM, // Required
    $RFCDEST: "", // Optional
  },
};

apiGET_NOTIFICATION(options);