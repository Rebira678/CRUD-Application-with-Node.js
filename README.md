
````markdown
# CRUD Application with Node.js and MySQL

##  Objective
This project is a **CRUD (Create, Read, Update, Delete)** application built with **Node.js (Express)** and connected to a **MySQL database**.  
It demonstrates CRUD operations for the **Users** entity and can be extended to support more entities (e.g., Courses, Orders, etc.).

---

##  Technologies Used
- **Node.js** – Backend runtime  
- **Express.js** – REST API framework  
- **MySQL** – Relational database  
- **mysql2** – Node.js MySQL driver  
- **Nodemon** – Development server auto-reload  
- **Postman** – API testing  

---

##  Project Setup

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-link>
cd crud-app-node-mysql
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=<your_mysql_password>
DB_NAME=crud_db
PORT=4000
```

### 4️⃣ Setup Database

Start MySQL and run the following commands:

```sql
CREATE DATABASE IF NOT EXISTS crud_db;
USE crud_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  age INT NOT NULL
);
```

### 5️⃣ Run the Server

```bash
npx nodemon server.js
```

Expected output:

```
Server running on http://localhost:4000
Connected to MySQL
Users table ready
```

---

## 🔗 API Endpoints

### 👤 User Entity (`/api/users`)

| Method | Endpoint         | Description      | Example Body (JSON)                                              |
| ------ | ---------------- | ---------------- | ---------------------------------------------------------------- |
| POST   | `/api/users`     | Create new user  | `{ "name": "Rebira", "email": "rebira@example.com", "age": 22 }` |
| GET    | `/api/users`     | List all users   | N/A                                                              |
| GET    | `/api/users/:id` | Get user by ID   | N/A                                                              |
| PUT    | `/api/users/:id` | Update user info | `{ "age": 23 }`                                                  |
| DELETE | `/api/users/:id` | Delete a user    | N/A                                                              |

---

## Testing the API

### Using **Postman**

* Import endpoints manually and test CRUD operations.

### Using **cURL**

Create a user:

```bash
curl -X POST http://localhost:4000/api/users \
-H "Content-Type: application/json" \
-d '{"name":"Rebira","email":"rebira@example.com","age":22}'
```

Get all users:

```bash
curl -X GET http://localhost:4000/api/users
```

Update a user:

```bash
curl -X PUT http://localhost:4000/api/users/1 \
-H "Content-Type: application/json" \
-d '{"age":23}'
```

Delete a user:

```bash
curl -X DELETE http://localhost:4000/api/users/1
```

### Using **MySQL CLI / Workbench**

```sql
USE crud_db;
SELECT * FROM users;
```

---

##  Skills Demonstrated

* Designing database schema in MySQL
* SQL basics: `INSERT`, `SELECT`, `UPDATE`, `DELETE`
* Building REST APIs with **Node.js + Express**
* Database integration using **mysql2**
* API testing with **Postman / cURL**

---

##  Author

**Rebira Adugna**
Software Engineering Student | Full Stack & Cloud Enthusiast
ASTU, Ethiopia

```
