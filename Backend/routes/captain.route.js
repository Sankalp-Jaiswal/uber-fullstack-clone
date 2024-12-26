import express from 'express';
import { body } from 'express-validator';
import { captainLogin, captainRegister, getCaptainProfile, logoutCaptain } from '../controllers/captain.controller.js';
import { authCaptain } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/register',[
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate number must be atleast 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car','bike','auto','Car', 'Bike', 'Auto']).withMessage('Invalid vehicle type'),
],captainRegister)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long')
],captainLogin)

router.get('/profile',authCaptain, getCaptainProfile)

router.get('/logout', authCaptain, logoutCaptain)
 
export default router;