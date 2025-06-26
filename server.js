import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
//import uploaderRoutes from "./routes/uploaderRoutes.js";

//dirname equivalent for ES6 module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//App initialization
const app = express();
const port  = 3000;

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//View engine setup
app.set('view engine','ejs');

//Mongo DB Connection
const mongoUri = 'mongodb+srv://vkashyap1998:3b7d47uVu8rpw5Yr@cluster0.dmyyvlj.mongodb.net/File_Uploader_Project2';

mongoose.connect(mongoUri).then(() => {
console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(`Failed to connect to mongoDB : ${err}`);
});

//Routes Connection
app.use('/',uploaderRoutes);












//Running server
app.listen(port,() => {
console.log(`Server is running on : ${port}`);
});