App.setBusy(false);

//Show messages pushed back from SAP
// if (modelmessageBox.oData) {
//     globalMessageType = modelmessageBox.oData[0].TYPE;
//     messages.setState(modelmessageBox.oData[0].TYPE);
//     messages.open();
// }

var systemMessage = xhr.responseJSON.result.LS_MESSAGE;

if (systemMessage.MESSAGE !== ''){
    modeldiaMessages.setData(systemMessage);

    diaMessages.open();
}