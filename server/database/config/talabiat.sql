BEGIN;

DROP TABLE IF EXISTS customers, owners, restaurants, categories, meals, orders, requests, bills CASCADE;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    location TEXT,
    phone INTEGER,
    picture TEXT
);

CREATE TABLE owners (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone INTEGER,
    picture TEXT
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  ownerID INTEGER REFERENCES owners(id) ON UPDATE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  location TEXT,
  phone INTEGER,
  picture TEXT,
  description TEXT,
  rating INTEGER,
  income FLOAT
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurantID INTEGER RE4 restaurant(id) ON UPDATE CASCADE,
  name VARCHAR(155),
  picture TEXT
);

CREATE TABLE meals (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description TEXT,
  price FLOAT,
  rating INTEGER,
  picture TEXT
);

CREATE TABLE requests (
  id SERIAL PRIMARY KEY NOT NULL,
  customerID INTEGER RE4 customers(id) ON UPDATE CASCADE,
  restaurantID INTEGER RE4 restaurant(id) ON UPDATE CASCADE,
  mealID INTEGER RE4 meals(id) ON UPDATE CASCADE,
  quantity INTEGER,
  description TEXT
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY NOT NULL,
  requestID INTEGER RE4 requests(id) ON UPDATE CASCADE,
  state TEXT,
  bill FLOAT,
  arriveTime TIME(6)
);

CREATE TABLE bills(
  id SERIAL PRIMARY KEY NOT NULL,
  customerID INTEGER RE4 customers(id) ON UPDATE CASCADE,
  restaurantID INTEGER RE4 restaurant(id) ON UPDATE CASCADE,
  money FLOAT,
  date TIMESTAMP CURRENT_DATE
);

COMMIT;