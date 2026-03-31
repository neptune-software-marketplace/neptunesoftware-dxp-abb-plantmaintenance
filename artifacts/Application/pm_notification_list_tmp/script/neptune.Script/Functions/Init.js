if (sap.n) {
    sap.n.Shell.attachBeforeBack(
        function (oEvent) {
            // This code runs when back navigation happens

            // Example: Programmatically trigger your button's press handler or any function
            btnRefresh.firePress(); // simulate button press

            // Optionally prevent default back navigation for custom behavior
            // oEvent.preventDefault();
        }.bind(this)
    );
}
