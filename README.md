````markdown
# Task 5: REST API with Database Integration

## Description

This project is a continuation of Task 4, focusing on integrating a REST API with a **MySQL database**.  
Users can be added, viewed, updated, and deleted via the API. All operations are stored and retrieved from the database.

Each user has the following fields:

- `id` (auto-increment primary key)
- `name`
- `email`
- `age`

---

## Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - REST API framework
- **MySQL** - Relational database
- **mysql2** - Node.js MySQL driver
- **Nodemon** - Development server auto-reload
- **Postman** - API testing

---

## Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd rest-api-db
```
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=<your_mysql_password>
DB_NAME=saiketdb
PORT=4000
```

### 4️⃣ Start MySQL and create database/table

```sql
CREATE DATABASE IF NOT EXISTS saiketdb;
USE saiketdb;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  age INT NOT NULL
);
```

### 5️⃣ Start the server

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

## API Endpoints

| Method | Endpoint         | Description       | Body Example (JSON)                                              |
| ------ | ---------------- | ----------------- | ---------------------------------------------------------------- |
| POST   | `/api/users`     | Create a new user | `{ "name": "Rebira", "email": "rebira@example.com", "age": 22 }` |
| GET    | `/api/users`     | List all users    | N/A                                                              |
| GET    | `/api/users/:id` | Get a user by ID  | N/A                                                              |
| PUT    | `/api/users/:id` | Update user info  | `{ "age": 23 }`                                                  |
| DELETE | `/api/users/:id` | Delete a user     | N/A                                                              |

---

## Testing the API

1. **Postman**: Create requests for all endpoints and verify responses.
2. **MySQL**: Check the `users` table to confirm CRUD operations:

```sql
USE saiketdb;
SELECT * FROM users;
```

---

## Skills Demonstrated

- SQL basics: `INSERT`, `SELECT`, `UPDATE`, `DELETE`
- Node.js + Express REST API
- Database connection using `mysql2`
- CRUD operations integration
- API testing with Postman

---

## Author

**Rebira Adugna**
Software Engineering Student | Full Stack & Cloud Enthusiast
ASTU, Ethiopia

```

```
