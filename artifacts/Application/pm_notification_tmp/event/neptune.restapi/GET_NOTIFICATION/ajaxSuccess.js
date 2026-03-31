App.setBusy(false);

modelPageNotification.setData(xhr.responseJSON.result.MS_NOTIFICATION);
modellstMessages.setData(xhr.responseJSON.result.MT_NOTES);

lblAsset.setText(modelPageNotification.oData.EQUIP_DESC);
lblLocation.setText(modelPageNotification.oData.FLOC_DESC);
screenDisplayMode();
IconTabMessages.setCount(modellstMessages.oData.length);

// var options = {
//     parameters: {
//         $select: "", // Optional
//         "sap-client": "", // Required
//         $RFCDEST: "", // Optional
//     },
//     data: {
//         MS_NOTIFICATION: notification,
//     },
// };

// apiGET_NOTIFICATION_IMAGES(options);