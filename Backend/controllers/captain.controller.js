import { validationResult } from "express-validator";
import Captain from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";

export const captainRegister = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const {fullname,email,password,color,vehicle} = req.body;

    const isCAPTAINalreadyExist = await Captain.findOne({ email: email });
    if (isCAPTAINalreadyExist) {
        return res.status(400).json({ message: "Captain already exists" });
    }

    const hashedPassword = await Captain.hashPassword(password);

    const captain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      model: vehicle.model,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    const token = captain.generateAuthToken();
    res.status(201).json({ captain, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
