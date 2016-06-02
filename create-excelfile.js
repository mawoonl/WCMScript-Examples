/**
* Creating a excel file using data from the crawler
*
* @author Bob van der Valk
*/
use("Crawler"); // Use the crawl library
use("ExcelExport"); // Use the ExcelExport library

// Crawl the website http://mawoo.nl
var doc = Crawler.crawl("http://mawoo.nl");
// Select a class in the HTML content
var element = doc.select(".service-box-1 p");

// Create a new excel workbook
var sheet = ExcelExport.create("mawoo-content");
var rowCount = 0;

// Loop through the elements from the crawler
element.forEach(function(element) {
    // Save element in the excel sheet at rowCount and collumn zero
    sheet.addRow(rowCount).createCell(element.text(), 0);
    
    // Show the text in the debugger
    debug(element.text());
    
    // add one to rowCount to save the next element on a new row
    rowCount++;
    
    // Save the file
    sheet.save("C:\\Users\\bobva\\Desktop\\mawoo-data.xlsx");
});

// Close the sheet
sheet.close();

