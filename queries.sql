-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, CategoryName
FROM Product AS P
JOIN Category AS C
ON P.CategoryId = C.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 329 records.

SELECT Id, S.CompanyName, ShippedDate
FROM [Order] AS O
JOIN Shipper AS S
ON O.ShipVia = S.Id
WHERE ShippedDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity
FROM OrderDetail AS O
JOIN Product AS P
ON O.ProductId = P.Id
WHERE O.OrderId = 10251
ORDER BY ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT O.Id AS OrderId, C.CompanyName AS CustomerCompanyName, E.LastName AS EmployeeLastName
FROM [Order] AS O
JOIN Customer AS C
ON O.CustomerId = C.Id
JOIN Employee AS E
ON O.EmployeeId = E.Id;