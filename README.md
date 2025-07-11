# 💬 Chatty – Real-time Chat Application

Chatty is a sleek and modern real-time chat application built with the MERN stack and Socket.IO. It allows users to sign in, manage contacts, and exchange messages instantly.

🚀 **Live App**: [chat-application-4zqm.onrender.com](https://chat-application-4zqm.onrender.com)

---

## 🛠 Tech Stack

| Frontend    | Backend    | Real-time | Database |
| ----------- | ---------- | --------- | -------- |
| React.js    | Node.js    | Socket.IO | MongoDB  |
| TailwindCSS | Express.js |           |          |

---

## ✨ Features

* ✅ **Authentication** – Signup, login, logout
* 🧑‍🤝‍🧑 **Contact List** – See and select friends to chat with
* 💬 **One-to-One Messaging** – Realtime private chat via Socket.IO
* 🌐 **Online/Offline Status** – Shows user presence
* 📸 **Image Support** – Upload and send images in chat
* ⚙️ **User Settings** – Update profile settings
* 🧑‍💼 **Profile & Logout** – View profile and log out securely
* 🎨 **Dark Mode UI** – Modern and responsive Tailwind CSS design

---

## 🖼️ Screenshots

### 🧑 Contacts & Messaging

![image](https://github.com/user-attachments/assets/c99303fa-ff44-47cc-9c70-4873c1e8c202)


---

## ⚙️ Installation & Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Nitheesh-Purnanand/chatty.git
cd chatty
```

### 2. Backend Setup

```bash
cd backend
npm install
# Add .env file
touch .env
```

Add the following to `.env`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Then run:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> The app should now be running at `http://localhost:5173`

---

## 🔐 Environment Variables

| Variable     | Description               |
| ------------ | ------------------------- |
| `MONGO_URI`  | MongoDB connection string |
| `JWT_SECRET` | Secret for JWT token      |
| `PORT`       | Backend server port       |

---

## 🧪 Deployment

### 📦 Backend

Deployed on [Render](https://render.com/)

* Make sure to configure environment variables (`MONGO_URI`, `JWT_SECRET`) on Render Dashboard.

### 🌐 Frontend

Deployed via [Render Static Site](https://render.com/docs/static-sites)

* Update `vite.config.js` for proper proxying if needed.

---

## 💡 Future Enhancements

* ✅ Group Chats
* ✅ Message Deletion
* ✅ Read Receipts
* ✅ Typing Indicators
* ✅ Push Notifications

---
