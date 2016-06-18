/**
* Create a file
* For this example we are going to create a textfile with a sentence
*
* @author Bob van der Valk
*/
use("CustomFile");

var content = "The brown fox jumps over the lazy dog";
CustomFile.newFile("helloworld.txt", content).save();

info("File saved");
