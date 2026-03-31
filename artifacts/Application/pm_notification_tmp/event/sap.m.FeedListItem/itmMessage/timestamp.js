if (typeof CRTIM === "undefined" || CRTIM === null || CRTIM === "") {
    return;
}

var formattedText = CRTIM;

// Replace yourField and change pattern
var oSAPFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
    pattern: "HHmmss",
});
var oOutFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
    pattern: "hh:mm:ss a",
});

// Create Date Instance
var oDate = oSAPFormat.parse(formattedText);

// Format Date
formattedText = oOutFormat.format(oDate);

return formattedText;
