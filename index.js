const express = require('express');
const connectDB = require('./config/db');
const AuthRouter = require('./controller/auth.controller');
const UserRouter = require('./controller/user.controller');
require('dotenv').config();
const app = express();

app.use(express.json());

// Connect to the database
connectDB();
// Import routes
app.use("/auth", AuthRouter)
app.use("/user", UserRouter)

app.get('/', (_, res) => {
    return res.status(200).json({
        message: 'Welcome to the API',
    });
});

app.listen(process.env.PORT,process.env.HOSTNAME, () => {
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
