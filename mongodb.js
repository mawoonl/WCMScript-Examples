/**
 * Find data in a MongoDB collection
 * 
 * @author Bob van der Valk
 */ 
use("MongoDB");

var mongo = MongoDB.setDatabase("local").connect();

var collection = mongo.getCollection("test_collection");
var find = collection.find("{ company: \"Mawoo\"}");

while(find.hasNext()) {
    info(find.next());
}

mongo.close();
