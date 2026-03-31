App.setBusy(true);

var options = {
  parameters: {
    $select: "", // Optional
    "sap-client": "", // Required
    $RFCDEST: "", // Optional
  },
};

apiGET_MY_NOTIFICATIONS(options);