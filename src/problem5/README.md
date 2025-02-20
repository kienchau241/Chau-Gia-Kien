# ExpressJS + TypeScript + SQLite (Prisma ORM) CRUD API

## 🚀 Project Overview
This is a **REST API** built with **ExpressJS and TypeScript**, providing full CRUD (Create, Read, Update, Delete) functionalities for a `User` resource. The API uses **SQLite** as the database and **Prisma ORM** for database management.

---

## 📌 Features

- ✅ **Create a resource** (`POST /users`)
- ✅ **List resources with filters** (`GET /user?id=1&name=kien`)
- ✅ **Get resource details** (`GET /user/:id`)
- ✅ **Update resource details** (`PUT /users/:id`)
- ✅ **Delete a resource** (`DELETE /users/:id`)

---

## 🏗️ Project Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/kienchau241/Chau-Gia-Kien.git
cd src
cd problem5
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
DATABASE_URL="file:./dev.db"
```

### 4️⃣ Initialize Prisma and the Database
Run the following commands to set up the database:
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### 5️⃣ Start the Server

#### **Development Mode (with Nodemon)**
```sh
npm run dev
```

#### **Production Mode**
```sh
npm run build
npm start
```

---

## 🛠️ API Endpoints

### 📌 Create a Product
**POST** `/users`
#### Request Body (JSON):
```json
{
  "name": "Gia Kien",
  "description": "kienchau241@gmail.com"
}
```
#### Response:
```json
{
  "id": 1,
  "name": "Gia Kien",
  "description": "kienchau241@gmail.com"
}
```
---

### 📌 List All Products (With Filters)
**GET** `/products`

#### Query Parameters:
- `name` (optional) → Filter by name
- `email` (optional) → Filter by email

#### Example Request:
```sh
GET /users?email=kienchau241@gmail.com
```
#### Response:
```json
[
  {
    "id": 1,
    "name": "Gia Kien",
    "description": "kienchau241@gmail.com"
  }
]
```
---

### 📌 Get Product by ID
**GET** `/users/:id`
```sh
GET /users/1
```
#### Response:
```json
{
  "id": 1,
  "name": "Gia Kien",
  "description": "kienchau241@gmail.com"
}
```
---

### 📌 Update a Product
**PUT** `/users/:id`
#### Request Body:
```json
{
  "name": "Chau Gia Kien",
  "email": "giakien241@gmail.com"
}
```
#### Response:
```json
{
  "id": 1,
  "name": "Chau Gia Kien",
  "email": "giakien241@gmail.com"
}
```
---

### 📌 Delete a Product
**DELETE** `/users/:id`
```sh
DELETE /users/1
```
#### Response:
```json
{
  "message": "User with id 1 deleted successfully"
}
```

---

## 🛠️ Tools & Technologies Used
- **Express.js** - Web framework
- **TypeScript** - Strongly typed JavaScript
- **SQLite** - Lightweight database
- **Prisma ORM** - Database ORM for TypeScript
- **Nodemon** - Hot-reloading in development

---

🎉 **Happy Coding! 🚀**
