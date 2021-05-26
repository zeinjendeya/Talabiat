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



COMMIT;