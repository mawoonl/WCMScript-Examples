use("exceloutput.js");

print("Creating a excelfile");

var spreadsheet = new ExcelOutput("testsheet");

spreadsheet.addRow(0);
spreadsheet.createCell("Sum: ", 0);
spreadsheet.createCell("Result: ", 1);

var rownum = 1;
for(i = 0; i < 10; i++){
    spreadsheet.addRow(rownum);
    rownum++;
    var a = 1;
    var b = 2;

    spreadsheet.createCell(a +" + "+ b +"=", 0);
    spreadsheet.createCell(a + b, 1);
}

spreadsheet.save("workbook.xlsx");
