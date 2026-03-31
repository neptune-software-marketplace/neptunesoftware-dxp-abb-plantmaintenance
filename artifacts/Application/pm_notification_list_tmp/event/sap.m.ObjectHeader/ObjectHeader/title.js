if (typeof EQUIPMENT === "undefined" || EQUIPMENT === null || EQUIPMENT === "") {
    return;

}

if (typeof EQUIP_DESC === "undefined" || EQUIP_DESC === null || EQUIP_DESC === "") {
    return;

}

var formattedText = EQUIPMENT.replace(/^0+/, '');
var formattedText = formattedText + " - " + EQUIP_DESC
return formattedText;
