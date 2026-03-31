App.setBusy(true);

var note = txtMessage.getValue();

var options = {
    parameters: {
        $select: "", // Optional
        "sap-client": "", // Required
        I_QMNUM: modelPageNotification.oData.QMNUM, // Required
        $RFCDEST: "", // Optional
    },
    data: {
        MS_NOTE: { CONTENT: note },
    },
};

apiADD_NOTE(options);

txtMessage.setValue();