/**
* Get the headline of NU.NL news website
*
* @author Bob van der Valk
*/
use("webcrawler.js");

var crawler = new WebCrawler();

crawler.run("http://nu.nl");
var data = crawler.get().select(".molecule-headline-title");

print(data);