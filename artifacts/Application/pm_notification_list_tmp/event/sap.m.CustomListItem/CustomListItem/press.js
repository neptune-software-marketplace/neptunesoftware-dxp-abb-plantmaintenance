const notification = oEvent.getSource().getBindingContext("NotificationsModel").getObject();
// const allNotes = modelNotificationsModel.getProperty("/MT_NOTIFICATIONS");
const allNotes = modelNotificationsModel.getProperty("/MT_NOTES");

//const notes = allNotes.filter((note) => note.QMNUM === notification.QMNUM);
//Neptune way of finding:
const notes = ModelData.Find(allNotes, "QMNUM", notification.QMNUM);

AppCache.Load("pm_notification_tmp", {
    startParams: {
        notification: notification,
        notes: notes,
        QMNUM: null,
        mode: "display",
    },
});
