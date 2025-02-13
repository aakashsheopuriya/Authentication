import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({ success: false, message: "Not Authoried, login again" });
  }
  try {
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokendecode.id) {
      req.body.userId = tokendecode.id;
    } else {
      return res.json({
        success: false,
        message: "Not Authoried, login again",
      });
    }

    next();
  } catch (error) {
    es.json({ success: false, message: error.message });
  }
};

export default userAuth;
