let notification = modelPageNotification.oData;

App.setBusy(true);

var options = {
  parameters: {
    $select: "", // Optional
    "sap-client": "", // Required
    I_QMNUM: notification.QMNUM, // Required
    $RFCDEST: "", // Optional
  },
};

apiCLOSE_NOTIFICATION(options);

closeNotification.close();