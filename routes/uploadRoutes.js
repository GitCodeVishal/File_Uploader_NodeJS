import express from 'express';
import upload from '../middleware/upload.js';
import { uploadImage, renderIndex } from '../controllers/uploadController.js';

const router = express.Router();

router.get('/', renderIndex);
router.post('/upload', upload.single('file'), uploadImage);

export default router;
