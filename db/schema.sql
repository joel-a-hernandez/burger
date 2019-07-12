DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_increment,
    burger_name VARCHAR(100) NOT NULL,
    devoured boolean NOT NULL DEFAULT 0,
    createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);