App.setBusy(true);
isUserScanning = true;

//Script
cordova.plugins.barcodeScanner.scan(
    // success callback function
    function (result) {
        // wrapping in a timeout so the dialog doesn't free the app
        setTimeout(function () {
            //pass scanned Equipment number to backend
            if (result.text !== "" || result.text !== null) {
                var options = {
                    parameters: {
                        $select: "", // Optional
                        "sap-client": "", // Required
                        I_EQUIPMENT: result.text, // Required
                        $RFCDEST: "", // Optional
                    },
                };

                apiGET_EQUIPMENT_INFO(options);
            }
        }, 0);
    },

    // error callback function
    function (error) {
        // jQuery.sap.require("sap.m.MessageToast");
        // sap.m.MessageToast.show("Scanning failed: " + error);

        alert("Scanning failed: " + error);
    },

    // options object
    {
        preferFrontCamera: false,
        showFlipCameraButton: true,
        //"orientation": "landscape"
    }
);
