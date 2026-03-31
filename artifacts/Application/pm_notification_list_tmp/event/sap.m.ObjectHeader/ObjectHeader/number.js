if (typeof QMNUM === "undefined" || QMNUM === null || QMNUM === "") { return; }  
var formattedText = QMNUM.toString().replace(/^0+/, '');
return formattedText;