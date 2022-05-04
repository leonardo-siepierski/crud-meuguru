import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser, 
  updateUser
} from '../controllers/usersController';
import {
  isUser,
  validateEmail,
  validateName,
  validatePassword
} from '../middlewares/validateUser';

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:email', isUser, getUser);

router.post('/', validateEmail, validateName, validatePassword, createUser);

router.put('/:email', isUser, validateName, validatePassword, updateUser);

router.delete('/:email', isUser, deleteUser);

export default router;