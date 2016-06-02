/**
* Get the headline of NU.NL news website
*
* @author Bob van der Valk
*/
use("Crawler");

var doc = Crawler.crawl("http://nu.nl");
var element = doc.select(".molecule-headline-title");

element.forEach(function(element){
   info(element.text()); 
});
