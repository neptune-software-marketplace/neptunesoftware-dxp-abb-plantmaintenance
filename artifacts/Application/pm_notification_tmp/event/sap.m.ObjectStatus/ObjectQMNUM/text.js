if (typeof QMNUM === "undefined" || QMNUM === null || QMNUM === "") {
    return;
}

var formattedText = 'Notification # ' + QMNUM.toString().replace(/^0+/, '');
return formattedText;
