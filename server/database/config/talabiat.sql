BEGIN;

DROP TABLE IF EXISTS users, restaurants, menus, meals, desserts, sideDishes, drinks CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurantName VARCHAR(255),
  location  VARCHAR(255),
  type VARCHAR(255)
);

CREATE TABLE menus (
  id SERIAL PRIMARY KEY NOT NULL,
  menuName VARCHAR(255),
  restaurantID INTEGER REFERENCES restaurants(id) ON UPDATE CASCADE
);

CREATE TABLE meals (
  id SERIAL PRIMARY KEY NOT NULL,
  mealName VARCHAR(255),
  price INTEGER,
  mealPic VARCHAR(255),
  menuID INTEGER REFERENCES menus(id) ON UPDATE CASCADE
);

CREATE TABLE desserts (
  id SERIAL PRIMARY KEY NOT NULL,
  dessertName VARCHAR(255),
  price INTEGER,
  dessertPic VARCHAR(255),
  menuID INTEGER REFERENCES menus(id) ON UPDATE CASCADE
);

CREATE TABLE sideDishes (
  id SERIAL PRIMARY KEY NOT NULL,
  dishName VARCHAR(255),
  price INTEGER,
  dishPic VARCHAR(255),
  menuID INTEGER REFERENCES menus(id) ON UPDATE CASCADE
);

CREATE TABLE drinks (
  id SERIAL PRIMARY KEY NOT NULL,
  drinkName VARCHAR(255),
  price INTEGER,
  menuID INTEGER REFERENCES menus(id) ON UPDATE CASCADE
);

COMMIT;