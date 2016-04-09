use("mongodb.js");

print("start");

var mongoConnector = MongoConnector("local");

var input = "{name: \"Joshua Jenster\", company: \"Mawoo\"}";

mongoConnector.getCollection("Test_collection").insertOne(input);