import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

//dirname equivalent for ES6 module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//App initialization
const app = express();

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//View engine setup
app.set('view engine','ejs');

//Mongo DB Connection

mongoose.connect(process.env.Mongo_URI).then(() => {
console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(`Failed to connect to mongoDB : ${err}`);
});

//Routes Connection
app.use('/',uploadRoutes);


//Running server
app.listen(process.env.PORT,() => {
console.log(`Server is running on : ${process.env.PORT}`);
});