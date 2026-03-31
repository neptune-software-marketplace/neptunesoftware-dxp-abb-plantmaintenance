if (typeof STATUS_TEXT === "undefined" || STATUS_TEXT === null || STATUS_TEXT === "") {
    return;
}

var formattedText = 'STATUS: ' + STATUS_TEXT.toString().toUpperCase();
return formattedText;
