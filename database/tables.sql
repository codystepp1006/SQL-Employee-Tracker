USE employee_db;
DROP TABLE IF EXISTS department;
USE employee_db;
DROP TABLE IF EXISTS employee;

USE employee_db;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dpt_name VARCHAR(30) NOT NULL
);

USE employee_db;

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    dpt_id INT,
    CONSTRAINT fk_role FOREIGN KEY (dpt_id) REFERENCES department(id) ON DELETE SET NULL
);