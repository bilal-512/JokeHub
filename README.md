
<p align="center">
   <img src="https://em-content.zobj.net/source/microsoft-teams/363/performing-arts_1f3ad.png" width="80" alt="JokeHub Logo"/>
</p>

# JokeHub 🎭

<p align="center">
   <b>A RESTful API for storing, retrieving, and sharing jokes.</b><br>
   Built with <b>Node.js, Express, and MongoDB (Mongoose)</b>.
</p>

---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Installation & Setup](#-installation--setup)
- [Testing with Postman](#-testing-with-postman)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---


## 🚀 Features

- Full **CRUD operations** for jokes
- **MongoDB Atlas** as the database
- RESTful endpoints with Express Router
- Random joke generator 🎲
- Clean project structure (MVC-like organization)
- Error handling with proper status codes

---


## 📌 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Postman** (for API testing)

---



## 📂 Project Structure

```
JokeHub/
│── models/          # Mongoose schemas (joke, user)
│── routes/          # Express routes (jokes, auth, about)
│── middlewares/     # Custom Express middlewares (auth)
│── utils/           # Database connection & utilities
│── server.js        # Entry point
│── package.json
│── README.md
│── .env             # Environment variables
```

---



## ⚡ API Endpoints

### Authentication

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| POST   | `/api/auth/signup`  | Register a new user       |
| POST   | `/api/auth/login`   | Login and get JWT token   |

#### Example: Signup
Request:
```json
{
   "username": "john",
   "email": "john@example.com",
   "password": "password123"
}
```
Response:
```json
{
   "message": "user created successfully"
}
```

#### Example: Login
Request:
```json
{
   "email": "john@example.com",
   "password": "password123"
}
```
Response:
```json
{
   "token": "<jwt-token>"
}
```

---

### Jokes (Protected)

> All joke endpoints (except `/api/jokes/random` and `/api/jokes/:id`) require a valid JWT in the `Authorization: Bearer <token>` header.

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | `/api/jokes`        | Get all jokes (protected) |
| GET    | `/api/jokes/:id`    | Get joke by ID            |
| POST   | `/api/jokes`        | Create a new joke (protected) |
| PUT    | `/api/jokes/:id`    | Update a joke             |
| DELETE | `/api/jokes/:id`    | Delete a joke             |
| GET    | `/api/jokes/random` | Get a random joke         |

#### Example: Get All Jokes
Request header:
```
Authorization: Bearer <jwt-token>
```
Response:
```json
[
   {
      "_id": "...",
      "type": "twopart",
      "setup": "Why did the backend developer go broke?",
      "punchline": "Because he kept working for free APIs!"
   },
   ...
]
```

#### Example: Get Random Joke
Response:
```json
{
   "_id": "...",
   "type": "twopart",
   "setup": "Why did the backend developer go broke?",
   "punchline": "Because he kept working for free APIs!"
}
```

---


## 🔧 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/bilal-512/JokeHub.git
   cd JokeHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```


3. **Add environment variables**
   Create a `.env` file in the root with:
   ```env
   DB_API=your-mongodb-atlas-uri
   JWT_SECRET=your-jwt-secret
   PORT=3000
   ```

4. **Run the server**
   ```bash
   npm start
   ```

---


## 🧪 Testing with Postman

- Import the included Postman collection (if available)
- Or test endpoints manually (set `Content-Type: application/json` for POST/PUT requests)

Example **POST body**:
```json
{
   "type": "twopart",
   "setup": "Why did the backend developer go broke?",
   "punchline": "Because he kept working for free APIs!"
}
```

---



## 🚀 Future Improvements

- Pagination for large joke lists
- User profile & joke favorites
- Improved error handling & validation
- Deploy on **Render / Railway / Vercel** with MongoDB Atlas

---


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!<br>
Feel free to [open an issue](https://github.com/bilal-512/JokeHub/issues) or submit a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.


## 👨‍💻 Author

**Bilal Ahmad**<br>
Backend Developer in progress 🚀<br>
[GitHub](https://github.com/bilal-512) | [LinkedIn](#)


