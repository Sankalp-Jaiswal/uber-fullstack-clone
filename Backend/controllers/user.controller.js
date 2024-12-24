import User from "../models/user.models.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from 'express-validator';

export const userRegister = async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { fullname, email, password } = req.body;
        const hashedPassword = await User.hashPassword(password);

        const user = await createUser({ firstname:fullname.firstname, lastname:fullname.lastname, email, password: hashedPassword });

        const token = user.generateAuthToken();
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}