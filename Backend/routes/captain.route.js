import express from 'express';
import { body } from 'express-validator';
import { captainRegister } from '../controllers/captain.controller.js';
const router = express.Router();

router.post('/register',[
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate number must be atleast 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Invalid vehicle type'),
],captainRegister)



export default router;