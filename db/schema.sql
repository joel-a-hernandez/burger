DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
​
use burger_db;
 
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burger VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY ( id )
);