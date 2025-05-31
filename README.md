# 🔐 Authentication System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A secure authentication API built with Node.js, Express, and MongoDB

## 📌 Table of Contents
- [Features](#✨-features)
- [Installation](#🚀-installation)
- [API Documentation](#📚-api-documentation)
- [Environment Variables](#🔧-environment-variables)
- [Contributing](#🤝-contributing)
- [License](#📜-license)

## ✨ Features
- ✅ JWT Authentication
- ✅ Password Hashing with bcrypt
- ✅ User Registration & Login
- ✅ Protected Routes
- ✅ Input Validation
- ✅ Error Handling

## 🚀 Installation

1. Install dependencies:
```bash
npm install
```

### ⚙️ Environment Configuration


2. Create a .env file and add the following configuration
```.env
# Server Configuration
PORT=3000
HOSTNAME=localhost

# Database Configuration
MONGO_URI=mongodb://localhost:27017/recipes

# JWT Token
SECRET_KEY = <your_secret_key>
```
3. Start the server:
```bash
npm start
```

### 🧾 Postman Documentaion 
```bash
https://documenter.getpostman.com/view/41342583/2sB2qdhLbJ
```
### 🧾 Auth Endpoints 

| Method                                                                | Endpoint                         | Description                    |
|-----------------------------------------------------------------------|----------------------------------|--------------------------------|
| ![GET](https://img.shields.io/badge/METHOD-GET-brightgreen)           | `/api/auth   `                   | Get all the users              |
| ![POST](https://img.shields.io/badge/METHOD-POST-yellow)              | `/api/auth/register`             | Register new users             |
| ![POST](https://img.shields.io/badge/METHOD-POST-yellow)              | `/api/auth/login`                | Login a registered user        |
| ![GET](https://img.shields.io/badge/METHOD-GET-brightgreen)           | `/api/user/:id`                  | Get users by ID                |



### 📂 Folder Structure

Recipes_App/
├── config/
│   └── db.js
├── models/
│   └── auth.model.js
├── controllers/
│   └── auth.controller.js
│   └── user.controller.js
├── .env
├── .gitignore
├── index.js
└── package.json


## 🚀 Deployment on Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

This API is deployed on **Render** - a modern cloud platform for hosting web services.

### 🌐 Live Deployment
🔗 **Production URL**: [https://your-auth-api.onrender.com]([https://your-auth-api.onrender.com)  
🔗 **API Docs**: [https://your-auth-api.onrender.com/api-docs]([https://your-auth-api.onrender.com/api-docs)

### ⚙️ Render Configuration
1. **Service Type**: Web Service
2. **Runtime**: Node.js 18+
3. **Build Command**: `npm install && npm run build`
4. **Start Command**: `node server.js`
5. **Auto-Deploy**: Enabled on Git push to `main` branch

### 📦 Environment Variables
Configured in Render Dashboard:
```env
PORT=10000
MONGO_URI=mongodb://localhost:27017/authentication
NODE_ENV=development
JWT_SECRET= <your_secret_key>
JWT_EXPIRES=<token__expires_duration>
```
