import express from "express";
import {uploadFile} from "../controller/uploaderController.js";

const router = express.Router();

router.get('/',(req,res) => {
    render.js('index',{url : null});
})

router.post('/',uploadFile)