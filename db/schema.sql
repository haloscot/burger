### Schema

CREATE DATABASE Burger_db;

USE Burger_db ;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(30) NOT NULL,
    devoured boolean DEFAULT FALSE,
	PRIMARY KEY (id)
);