var systemMessage = xhr.responseJSON.result.LS_MESSAGE;

if (systemMessage.MESSAGE !== ''){
    modeldiaMessages.setData(systemMessage);

    diaMessages.open();
}