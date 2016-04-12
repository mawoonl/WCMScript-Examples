/**
* Create a file
* For this example we are going to create a textfile with a sentence
*
* @author Bob van der Valk
*/
use("fileexport.js");

var content = "The quick brown fox jumps over the lazy dog.";
var filename = "doesitwork.txt";

var export = new FileExport(filename, content);
export.save();

print("done");