# ExpressJS + TypeScript + SQLite (Prisma ORM) CRUD API

## 🚀 Project Overview
This is a **REST API** built with **ExpressJS and TypeScript**, providing full CRUD (Create, Read, Update, Delete) functionalities for a `Product` resource. The API uses **SQLite** as the database and **Prisma ORM** for database management.

---

## 📌 Features

- ✅ **Create a resource** (`POST /products`)
- ✅ **List resources with filters** (`GET /products?category=Electronics&minPrice=1000`)
- ✅ **Get resource details** (`GET /products/:id`)
- ✅ **Update resource details** (`PUT /products/:id`)
- ✅ **Delete a resource** (`DELETE /products/:id`)

---

## 🏗️ Project Setup

### 1️⃣ Clone the repository
```sh
git clone <your-repo-url>
cd <your-project-folder>
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
**POST** `/products`
#### Request Body (JSON):
```json
{
  "name": "Laptop",
  "description": "A high-end gaming laptop",
  "price": 1500.99,
  "category": "Electronics"
}
```
#### Response:
```json
{
  "id": 1,
  "name": "Laptop",
  "description": "A high-end gaming laptop",
  "price": 1500.99,
  "category": "Electronics",
  "createdAt": "2024-02-19T12:00:00.000Z"
}
```
---

### 📌 List All Products (With Filters)
**GET** `/products`

#### Query Parameters:
- `category` (optional) → Filter by category
- `minPrice` (optional) → Minimum price filter
- `maxPrice` (optional) → Maximum price filter

#### Example Request:
```sh
GET /products?category=Electronics&minPrice=1000
```
#### Response:
```json
[
  {
    "id": 1,
    "name": "Laptop",
    "description": "A high-end gaming laptop",
    "price": 1500.99,
    "category": "Electronics",
    "createdAt": "2024-02-19T12:00:00.000Z"
  }
]
```
---

### 📌 Get Product by ID
**GET** `/products/:id`
```sh
GET /products/1
```
#### Response:
```json
{
  "id": 1,
  "name": "Laptop",
  "description": "A high-end gaming laptop",
  "price": 1500.99,
  "category": "Electronics",
  "createdAt": "2024-02-19T12:00:00.000Z"
}
```
---

### 📌 Update a Product
**PUT** `/products/:id`
#### Request Body:
```json
{
  "name": "Updated Laptop",
  "price": 1400.99
}
```
#### Response:
```json
{
  "id": 1,
  "name": "Updated Laptop",
  "description": "A high-end gaming laptop",
  "price": 1400.99,
  "category": "Electronics",
  "createdAt": "2024-02-19T12:00:00.000Z"
}
```
---

### 📌 Delete a Product
**DELETE** `/products/:id`
```sh
DELETE /products/1
```
#### Response:
```json
{
  "message": "Product deleted successfully"
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

## 📖 Additional Commands

### 🌍 Run Prisma Studio (GUI for DB management)
```sh
npx prisma studio
```

### 🛠️ Run Database Migrations
```sh
npx prisma migrate dev --name update_schema
```

---

## 🚀 Deployment
For production, ensure that `DATABASE_URL` is correctly set and run:
```sh
npm run build
npm start
```

---

## 📜 License
This project is licensed under the MIT License.

---

## 🤝 Contributing
Feel free to contribute by submitting pull requests! 🎉

---

## 📞 Contact
For any issues, feel free to open an **Issue** on GitHub!

---

🎉 **Happy Coding! 🚀**
