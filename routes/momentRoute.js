import express from 'express';
import { addMoment } from '../controllers/momentController.js';
import { upload } from '../middlewares/uploadMiddleware.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/add', upload.single('image'), addMoment);

export default router;
