# ⚡ LuminaX Backend

The **LuminaX Backend** is a lightweight **Express.js server** that connects to **Google Gemini AI** via `@google/generative-ai`.
It powers the LuminaX frontend by handling AI requests securely and efficiently.

---

## 🚀 Features

* 🔐 Secure API with **CORS** configuration
* 🤖 AI responses from **Google Gemini**
* ⚡ Simple and fast **Express.js** setup
* 🌍 Environment variable support with **dotenv**
* 🔄 Easy integration with any frontend

---

## 📡 API Endpoint

### `POST /api/ask`

Send a user question to Gemini and receive an AI-generated response.

**Request Body**:

```json
{
  "question": "What is OOP in Java?"
}
```

**Response**:

```json
{
  "message": "Welcome to LuminaX",
  "response": "OOP (Object Oriented Programming) in Java is a programming paradigm that..."
}
```

---

## 🛠️ Tech Stack

* **Server**: Node.js, Express
* **AI**: Google Generative AI (`@google/generative-ai`)
* **Security**: dotenv, CORS
* **Deployment**: Render

---

## ⚙️ Setup

1. Clone the repo

```bash
git clone https://github.com/diwasbk/LuminaX-Backend.git
cd LuminaX-Backend
cd app
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=5000
API_KEY=your_google_gemini_api_key
ALLOWED_ORIGIN=http://localhost:5173
```

4. Run the server

```bash
node index.js
```

---

## Author

[Diwas Bk](https://github.com/diwasbk)

---
