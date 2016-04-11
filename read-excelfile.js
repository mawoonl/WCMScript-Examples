/**
* Read a excel file
*/
use("excelinput.js");

var spreadsheet = new ExcelImput("E:/Coding/Spongecraft Plugins/eco_prices.xlsx");

print(spreadsheet.getCell("Sheet1", "D5"));
print(spreadsheet.getCellValue("Sheet1", "D5"));