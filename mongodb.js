/**
* Connect to a MongoDB
* Read files in collections
*
* @author Bob van der Valk
*/
use("mongodb.js");

print("start");

var mongoConnector = new MongoConnector("local");
mongoConnector.setHost("localhost");
mongoConnector.connect();

var input = "{name: \"John Doe\", company: \"Mawoo\"}";

mongoConnector.getCollection("test_collection").insertOne(input);