use("excelinput.js");
print("start");

var spreadsheet = new ExcelImput("E:/Coding/Spongecraft Plugins/eco_prices.xlsx");

print(spreadsheet.getCell("Sheet1", "D5"));
print(spreadsheet.getCellValue("Sheet1", "D5"));