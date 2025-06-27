import Image from '../models/Image.js';
import fs from 'fs/promises';
import cloudinary from '../config/cloudinary.js';

export const renderIndex = (req, res) => {
  res.render('index', { url: null });
};

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.render('index', { url: null });

    const filePath = req.file.path;

    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'uploads',
      resource_type: 'image'
    });

    await fs.unlink(filePath);

    const newImage = await Image.create({ url: result.secure_url });

    res.render('index', { url: newImage.url });

  } catch (err) {
    if (req.file?.path) await fs.unlink(req.file.path); // safe cleanup
    res.status(500).render('index', { url: null, message: err.message });
  }
};
