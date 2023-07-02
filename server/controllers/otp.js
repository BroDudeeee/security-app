import otpGenerator from "otp-generator";

const generateOTP = async (req, res) => {
  try {
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    req.app.locals = {
      OTP: otp,
    };
    res.status(201).json({ code: otp });
  } catch (error) {
    res.status(500).json(error);
  }
};

const verifyOTP = async (req, res) => {
  try {
    if (req.app.locals.OTP == req.query.code) {
      req.app.locals.OTP = null;
      req.app.locals.resetSession = true;
      return res.status(201).json({ msg: "Verify Successfully!" });
    }
    res.status(400).json({ error: "Invalid OTP" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createResetSession = async (req, res) => {
  if (req.app.resetSession) {
    req.app.locals.resetSession = false;
    return res.status(201).json({ msg: "Access Granted!" });
  }
  return res.status(440).json({ error: "Session Expired!!!" });
};

export { generateOTP, verifyOTP, createResetSession };
