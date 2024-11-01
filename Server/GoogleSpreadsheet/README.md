# Google Spreadsheet Receiver

1. Create a **Google Sheet** and open **Extensions > Apps Script**

2. Set up the script:

```
function doGet(e) {
    const callback = e.parameter.callback;
    const option = e.parameter.option; // Retrieve the 'option' parameter from the request
    const placeIdentifier = e.parameter.placeIdentifier; // Retrieve the 'option' parameter from the request
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    
    // Append the "option" data to the sheet
    sheet.appendRow([new Date(), placeIdentifier, option]);

    // Prepare the JSONP response
    const result = JSON.stringify({ message: "Data received", option: option });
    return ContentService
        .createTextOutput(callback + "(" + result + ")")
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

```

3. **Deploy as Web App:** Under Deploy > Manage Deployments, select "Web app," and make it accessible to "Anyone."

4. **Copy the deployment URL** and past into `reportingUrl` in `config.js`
