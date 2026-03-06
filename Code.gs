/**
 * Main function that serves the web page.
 * It parses the URL parameters to personalize the invitation.
 */
function doGet(e) {
  // Get guest name and seat quota from URL parameters
  var name = e.parameter.name || "Guest";
  var cantMax = e.parameter.cant || 1; 
  
  // Load the HTML template and inject variables
  var tmp = HtmlService.createTemplateFromFile('index');
  tmp.name = name;
  tmp.cantidad = parseInt(cantMax); 
  
  // Evaluate the template and set metadata
  return tmp.evaluate()
    .setTitle("Wedding Invitation")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Processes the RSVP response and updates the Google Sheet.
 * @param {string} name - Guest name to find in the sheet.
 * @param {string} answer - 'Si' or 'No'.
 * @param {number} cantConfirmada - Number of confirmed guests.
 */
function processResponse(name, answer, cantConfirmada) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var timestamp = new Date();
  
  // Iterate through rows to find the matching guest name in column A
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == name) {
      // Column D (4): Count | Column E (5): Answer | Column F (6): Date
      sheet.getRange(i + 1, 4).setValue(cantConfirmada);
      sheet.getRange(i + 1, 5).setValue(answer);
      sheet.getRange(i + 1, 6).setValue(timestamp);
      return "OK";
    }
  }
}
