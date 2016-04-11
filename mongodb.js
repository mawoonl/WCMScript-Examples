/**
* Connect to a MongoDB
* Read files in collections
*
* @author Bob van der Valk
*/
use("mongodb.js");

print("start");

var mongoConnector = MongoConnector("local");

var input = "{name: \"John Doe\", company: \"Mawoo\"}";

mongoConnector.getCollection("Test_collection").insertOne(input);