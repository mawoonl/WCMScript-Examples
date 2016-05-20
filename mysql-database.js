/**
 * 
 * Execute queries en retreive data
 * 
 * @author Bob van der Valk
 */ 
use("Mysql"); // Import the MySql library

// Init the connection
var connection = Mysql.setHost("localhost") // set the host
                        .setUser("root") // set the user
                        .setPass("") // set the password
                        .setDatabase("wcms_test") // set the database
                            .connect(); // connect to the database

// example query
connection.query("INSERT INTO person (name, email) VALUES ('Linus Torvalds', 'linus@linux.com');");

// example query that outputs data
var result = connection.query("SELECT * FROM person");

// loop the data
while(result.next()) {
    info(result.get("name") +" - "+ result.get("email")); // output the data
}

// Close the database connection
connection.close();
