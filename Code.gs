function onOpen() {
  DocumentApp.getUi()
    .createMenu('click me') //Replace this with whatever you want the button on the doc to be called
    .addItem('Open Dialog', 'showDialog')
    .addToUi();
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index')
    .setWidth(10000)
    .setHeight(1000);
  DocumentApp.getUi().showModalDialog(html, 'dawc runner');
}
