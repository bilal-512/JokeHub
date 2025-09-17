
```markdown
# JokeHub 🎭  
A RESTful API for storing, retrieving, and sharing jokes. Built with **Node.js, Express, and MongoDB (Mongoose)**.  

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
│── models/          # Mongoose schemas
│── routes/          # Express routes
│── config/          # Database connection
│── server.js        # Entry point
│── package.json
│── README.md

````

---

## ⚡ API Endpoints

### Jokes
| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | `/api/jokes`        | Get all jokes             |
| GET    | `/api/jokes/:id`    | Get joke by ID            |
| POST   | `/api/jokes`        | Create a new joke         |
| PUT    | `/api/jokes/:id`    | Update a joke             |
| DELETE | `/api/jokes/:id`    | Delete a joke             |
| GET    | `/api/jokes/random` | Get a random joke 🎲       |

---

## 🔧 Installation & Setup

1. Clone the repo  
   ```bash
   git clone https://github.com/bilal-512/JokeHub.git
   cd JokeHub
````

2. Install dependencies

   ```bash
   npm install
   ```

3. Add environment variables
   Create a `.env` file in the root with:

   ```
   MONGO_URI=your-mongodb-atlas-uri
   PORT=3000
   ```

4. Run the server

   ```bash
   npm start
   ```

---

## 🧪 Testing with Postman

* Import the included Postman collection (if added)
* Or test endpoints manually (make sure to set `Content-Type: application/json` for POST/PUT requests)

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

* Add **JWT authentication** (user login/signup)
* Pagination for large joke lists
* Deploy on **Render / Railway / Vercel** with MongoDB Atlas

---

## 👨‍💻 Author

**Bilal Ahmad**
Backend Developer in progress 🚀 | [GitHub](https://github.com/bilal-512) | [LinkedIn](#)

```
