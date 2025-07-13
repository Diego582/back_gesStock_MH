import express from "express";

import validator from "../middlewares/validator.js";
import existUser from "../middlewares/existUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidToken from "../middlewares/isValidToken.js";
import isPassOk from "../middlewares/isPassOk.js";
import passport from "../middlewares/passport.js";

import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import token from "../controllers/auth/token.js";
import update from "../controllers/auth/update.js"

import registerSchema from "../schema/registerSchema.js";
import signinSchema from "../schema/signinSchema.js";

import signout from "../controllers/auth/signout.js"

const router = express.Router();

router.post(
  "/signup",
  validator(registerSchema),
  existUser,
  isValidPass,
  register
);
router.post(
  "/signin",
  validator(signinSchema),
  notExistsUser,
  isPassOk,
  isValidToken,
  signin
);

router.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  isValidToken,
  token
);

router.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signout
);

router.post(
  "/update/:_id", 
  passport.authenticate("jwt", { session: false }),
  update
);

export default router;