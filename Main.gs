/**
 * sendDocumentEmailFuntion
 * 
 * Test function to send files on
 * active email
 */
function sendDocumentEmailFuntion() {
  var doc = DocumentApp.create('New word Document');
  var sheet = SpreadsheetApp.create('New Spread sheet');
  doc.appendParagraph('Test add paragraph');
  sheet.appendRow(['Test add data', 'data1']);

  // send email to current used gmail
  var email = Session.getActiveUser().getEmail();
  var subject = 'Send Multiple Files Test';
  var body = 'Document Link: ' + doc.getUrl() + '\
    Spreadsheet Link: ' + sheet.getUrl();

  GmailApp.sendEmail(email, subject, body);
}
