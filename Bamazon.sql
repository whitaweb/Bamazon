CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
Item_ID INT NOT NULL AUTO_INCREMENT,
Product_Name VARCHAR(100) NOT NULL,
Department_Name VARCHAR(100) NOT NULL,
Price DECIMAL(10,2)  NULL,
Stock_Quantity INT NULL,
PRIMARY KEY (Item_ID)
)

SELECT * FROM Products;

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Umbrella", "General", "15.00", "11");

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Headphones", "Electronics", "23.00", "28");

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Coffee", "Food", "8.00", "16");

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Computer Desk", "Furniture", "187.00", "6");

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Printer", "Electronics", "144.00", "3");

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Yoga Mats", "Sports", "65.00", "8");

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Tents", "Outdoors", "113.00", "9");

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Volleyballs", "Sports", "17.00", "5");

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Rose Wine", "Beverage", "14.00", "7");

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Sunglasses", "Apparel", "34.00", "2");
