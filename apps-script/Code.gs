/* =========================================================
   Հյուրերի պատասխանները Google Sheet-ում պահելու կոդ
   Ինչպես տեղադրել՝ տես README.md, «Google Sheets» բաժինը
   ========================================================= */

const SHEET_NAME = "Պատասխաններ";
const HEADERS = ["Ամսաթիվ", "Անուն", "Կգա՞", "Կողմ", "Հյուրերի քանակ", "Մաղթանք"];

// Կայքի ձևը տվյալներն ուղարկում է այստեղ
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000); // որ միաժամանակ եկած պատասխանները չխառնվեն

  try {
    const sheet = getSheet_();
    const p = e.parameter;

    sheet.appendRow([
      new Date(),
      clean_(p.name, 100),
      clean_(p.attending, 10),
      clean_(p.side, 20),
      Math.min(Math.max(parseInt(p.guests, 10) || 0, 0), 20) || "",
      clean_(p.message, 1000),
    ]);

    return ContentService.createTextOutput("ok");
  } finally {
    lock.release();
  }
}

// Գտնում կամ ստեղծում է «Պատասխաններ» թերթը վերնագրերով
function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Կրճատում է երկար տեքստը և թույլ չի տալիս, որ հյուրի տեքստը
// Sheet-ում բանաձև (=, +, -, @) դառնա
function clean_(value, maxLength) {
  let text = String(value || "").trim().slice(0, maxLength);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}
