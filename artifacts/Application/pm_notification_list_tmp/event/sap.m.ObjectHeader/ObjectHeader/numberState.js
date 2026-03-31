let formattedText;

if (typeof PHASE === "undefined" || PHASE === null || PHASE === "") {
    return;
}

switch (PHASE) {
    case '1':
        formattedText = 'None';
        break;
    case '2':
        formattedText = 'Warning';
        break;
    case '3':
        formattedText = 'Information';
        break;
    case '4':
        formattedText = 'Success';
        break;
    case '5':
        formattedText = 'Error';
        break;
    default:
        formattedText = 'None';
}

return formattedText;
