import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import BlacklistToken from "../models/blacklistToken.model.js";
import Captain from "../models/captain.model.js";

export const authUser = async (req, res, next) => {
  const token =   req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: " a Unauthorized" });
  }

  const isBlacklisted = await BlacklistToken.findOne({token});
  if(isBlacklisted){
    return res.status(401).json({ error: "b Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ error: "v Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: " e Unauthorized" });
  }
};

export const authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: " Unauthorized" });
  }

  const isBlacklisted = await BlacklistToken.findOne({token});
  if(isBlacklisted){
    return res.status(401).json({ error: " Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded._id);
    
    const captain = await Captain.findById(decoded._id);
    if (!captain) {
      return res.status(401).json({ error: " Unauthorized" });
    }
    
    req.captain = captain;
    return next();
  } catch (error) {
    return res.status(401).json({ error: " Unauthorized" });
  }
}
