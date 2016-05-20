/**
* Creating a excel file using data from the crawler
*
* @author Bob van der Valk
*/
use("Crawler");
use("ExcelExport");

var doc = Crawler.crawl("http://mawoo.nl");
var element = doc.select(".service-box-1 p");

var sheet = ExcelExport.create("mawoo-content");
var rowCount = 0;

element.forEach(function(element) {
    sheet.addRow(rowCount).createCell(element.text(), 0);
    debug(element.text()) ;
    rowCount++;
    
    sheet.save("mawoo-data.xlsx");
});
