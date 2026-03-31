//Process start parameters
if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function (data, init) {
        let notification = data.notification;
        let notes = data.notes;
        let QMNUM = data.QMNUM;
        appMode = data.mode;

        if (appMode === "display") {
            if (notification) {
                modelPageNotification.setData(notification);
                modellstMessages.setData(notes);
                lblAsset.setText(notification.EQUIP_DESC);
                lblLocation.setText(notification.FLOC_DESC);
                screenDisplayMode();
                IconTabMessages.setCount(notes.length);

                var options = {
                    parameters: {
                        $select: "", // Optional
                        "sap-client": "", // Required
                        $RFCDEST: "", // Optional
                    },
                    data: {
                        MS_NOTIFICATION: notification,
                    },
                };

                apiGET_NOTIFICATION_IMAGES(options);
            } else {
                var options = {
                    parameters: {
                        $select: "", // Optional
                        "sap-client": "", // Required
                        I_QMNUM: QMNUM, // Required
                        $RFCDEST: "", // Optional
                    },
                };

                apiGET_NOTIFICATION(options);
            }
        } else if (appMode === "create") {
            screenCreateMode();
            clearScreen();

            if (sap.ui.Device.system.phone || sap.ui.Device.system.tablet) {
                scan.open();
                btnCamera.setVisible(true);
            }
        }

        if (sap.ui.Device.system.phone) {
            imgImage.setWidth("250px");
        } else if (sap.ui.Device.system.tablet) {
            imgImage.setWidth("500px");
        } else {
            imgImage.setWidth("600px");
        }

        IconTabBar.setSelectedKey(0);
    });
}

//Callback function for the functional locations/equipments
if (sap.n !== undefined) {
    neptune.Shell.attachInit(function (data, navObj) {
        if (sap.n.PMNotification === undefined) {
            sap.n.PMNotification = {};
        }
        sap.n.PMNotification.receiveTechnicalObject = function (
            technicalObject,
            type,
            objectDescription,
            location,
            locationDescription
        ) {
            let notification = modelPageNotification.oData;
            if (type === "T") {
                notification.FUNCT_LOC = technicalObject;
                notification.EQUIPMENT = "";
                lblLocation.setText(objectDescription);
                lblAsset.setText("");
            } else if (type === "E") {
                notification.FUNCT_LOC = location;
                notification.EQUIPMENT = technicalObject;
                lblAsset.setText(objectDescription);
                lblLocation.setText(locationDescription);
            }
            modelPageNotification.setData(notification);
        };
    });
}

//App.setBusy(true);
//getOnlineInitialize();
