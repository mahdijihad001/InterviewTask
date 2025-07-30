# 🧪 Simple Note-Taking API (Backend Interview Task)

A simple RESTful API built using **Node.js, Express, MongoDB (Mongoose), and TypeScript** for managing user authentication and personal note-taking.

---

## 🚀 Features

- User registration and login (JWT Authentication)
- Secure protected routes using middleware
- Create, Read, Update, Delete (CRUD) operations for notes
- Notes are user-specific (only owner can access/update/delete)
- TypeScript for type safety
- MongoDB with Mongoose for data persistence

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose** & **ZOD**
- **TypeScript**
- **JWT (JSON Web Token)** for authentication
- **bcrypt** for password hashing

---

## Installation & Setup

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/mahdijihad001/Simple-Note-Taking-API

```

2️⃣  **Run This Command:**

```
npm install
```

3️⃣ **Set up environment variables (.env):**

```
PORT=your server port no
MONGO_URL=your mongodb url
DEV_ENV=your environment type
JWT_SECRATE=your jwt secrate

```

4️⃣ **Run the development server:**

```
npm run dev

```

🔑 **API Endpoints**
## Authentication Routes:
1. Register User
POST /api/users/register

```
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}

```
2. Login User
POST /api/users/login

```
Request Body:
{
  "email": "john@example.com",
  "password": "123456"
}

```

**Notes Routes (Protected):**
3. Create Note
POST /api/notes

```
Request Body:
{
  "title": "My first note",
  "content": "This is the content of my first note."
}
```

4. Get All Notes
GET /api/notes

```

5. Get Single Note
GET /api/notes/:id

6. Update Note
PUT /api/notes/:id

```
Request Body:
{
  "title": "Updated Note Title",
  "content": "Updated note content."
}

```

7. Delete Note
DELETE /api/notes/:id




