import { validationResult } from "express-validator";
import Captain from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import BlacklistToken from "../models/blacklistToken.model.js";

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

export const captainLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const captain = await Captain.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(401).json({ error: "invalid email or password" });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "invalid email or password" });
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      maxAge: 3600000,
    });
    res.status(200).json({ captain, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
  
export const getCaptainProfile = async (req, res, next) => {
  try {
    res.status(200).json(req.captain);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const logoutCaptain = async (req, res, next) => {
  try {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1] || req.token;
    const blacklistedToken = new BlacklistToken({token});
    await blacklistedToken.save();
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}