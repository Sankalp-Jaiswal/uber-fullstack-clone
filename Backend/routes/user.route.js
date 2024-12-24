import express from 'express';
const router = express.Router();
import { body } from 'express-validator';
import { getUserProfile, logoutUser, userLogin, userRegister } from '../controllers/user.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';


router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long')
],userRegister)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long')
],userLogin)

router.get('/profile',authUser, getUserProfile)

router.get('/logout', authUser, logoutUser)





export default router;