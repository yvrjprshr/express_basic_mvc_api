import express from 'express';
import { addUser, getAllUsers, getUserById, getUserBySpecialId } from '../controllers/user.js';

const router = express.Router();

router.get('/all', getAllUsers);
router.post('/new', addUser);
router.get('/userid/specialid', getUserBySpecialId);
router.get('/userid/:id', getUserById);

export default router;