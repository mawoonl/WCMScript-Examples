/**
* Insert a document into MongoDB
*
* @author Bob van der Valk
*/
use("MongoDB");

var doc = "{name: \"John Doe\", company: \"Mawoo\", email: \"john@mawoo.nl\"}";

var mongo = MongoDB.setDatabase("local").connect();

// Or if you want to connect using credentials use:
//var mongo = MongoDB.setDatabase("local").connectAuthenticated("username", "password");

var collection = mongo.getCollection("test_collection");

collection.insertOne(doc);

mongo.close();

//You are done.
