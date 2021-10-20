import express from 'express';
import { getUser,getAll,addUser,delUser } from '../controllers/users.js';
const router = express.Router();

router.get('/', getUser);

router.get('/all',getAll);

router.post('/add',addUser);

router.delete('/:userID',delUser);

export default router;