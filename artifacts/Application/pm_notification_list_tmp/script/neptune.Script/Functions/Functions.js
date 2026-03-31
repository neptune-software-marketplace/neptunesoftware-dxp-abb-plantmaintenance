
function filterNotifications() {

    const binding = NotificationsList.getBinding("items");
    const oSorter = new sap.ui.model.Sorter("QMNUM", false, false);
    const searchValue = NotificationsSearchField.getValue();
    const statusValue = StatusSelect.getSelectedKey();
    const filters = [];

    if (searchValue) {
        const filterSearch = new sap.ui.model.Filter({
            filters: [
                new sap.ui.model.Filter("QMNUM", "Contains", searchValue),
                new sap.ui.model.Filter("FUNCT_LOC", "Contains", searchValue),
                new sap.ui.model.Filter("EQUIPMENT", "Contains", searchValue),
                new sap.ui.model.Filter("EQUIP_DESC", "Contains", searchValue),
            ],
            and: false,
        });
        filters.push(filterSearch);
    }

    if (!statusValue.includes("0")) {
        const filterStatus = new sap.ui.model.Filter("PHASE", "EQ", statusValue);
        filters.push(filterStatus);
    }

    binding.filter(filters);

    // Sort by QMNUM
    binding.sort(oSorter);
}