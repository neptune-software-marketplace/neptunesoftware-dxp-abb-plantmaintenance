let globalMessageType;
let appMode;
let isUserScanning = false;

function screenDisplayMode() {
    txtLocation.setEnabled(false);
    txtAsset.setEnabled(false);
    selPriority.setEnabled(false);
    txtSubject.setEnabled(false);
    txtDescription.setEnabled(false);
    RadioButtonGroup.setEnabled(false);
    btnSubmit.setVisible(false);
    if (sap.ui.Device.system.phone) {
        btnCamera.setVisible(true);
    }
    vbHeader.setVisible(true);
    PageNotification.setTitle(
        "Display Maintenance Notification # " +
            modelPageNotification.oData.QMNUM.toString().replace(/^0+/, "")
    );
    IconTabMessages.setVisible(true);
    btnCloseNotification.setVisible(true);
}

function screenCreateMode() {
    txtLocation.setEnabled(true);
    txtAsset.setEnabled(true);
    selPriority.setEnabled(true);
    txtSubject.setEnabled(true);
    txtDescription.setEnabled(true);
    RadioButtonGroup.setEnabled(true);
    btnSubmit.setVisible(true);
    if (sap.ui.Device.system.phone) {
        btnCamera.setVisible(true);
    }
    vbHeader.setVisible(false);
    PageNotification.setTitle("Create Maintenance Notification");
    IconTabMessages.setVisible(false);
    btnCloseNotification.setVisible(false);
}

function clearScreen() {
    modelPageNotification.setData({
        MALFUNCTION: true,
        PRIORITY: 3,
    });
    modellstImages.setData({});
    modellstImages.refresh();
    lblAsset.setText("");
    lblLocation.setText("");
    IconTabAttachments.setCount();
}

//**************************
// *** CAMERA FUNCTIONS ***
//**************************

//Initialize
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
function onPhotoDataSuccess(imageData) {
    //  Uncomment to view the base64-encoded image data
    console.log(imageData);

    let oImage;
    oImage = {
        CONTENT: "data:image/jpeg;base64," + imageData,
    };

    if (appMode === "display") {
        modelobjPicture.setData(oImage);
        App.setBusy(true);
        //getOnlineobjPicture(modelPageNotification.oData.QMNUM);
        var options = {
            parameters: {
                $select: "", // Optional
                "sap-client": "", // Required
                I_QMNUM: modelPageNotification.oData.QMNUM, // Required
                $RFCDEST: "", // Optional
            },
            data: {
                MS_IMAGE: modelobjPicture.oData,
                MS_NOTE: "",
            },
        };

        apiADD_IMAGE(options);
    } else {
        ModelData.Add(lstImages, oImage);
        modellstImages.refresh();
        IconTabAttachments.setCount(modellstImages.oData.length);
        sap.m.MessageToast.show("Picture added successfully");
    }
}

// A button will call this function
function capturePhoto() {
    //  Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 15,
        correctOrientation: true,
        destinationType: destinationType.DATA_URL,
    });
}

// Called if something bad happens.
function onFail(message) {
    alert("Failed because: " + message);
}
