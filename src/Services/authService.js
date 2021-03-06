const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");

const AuthService = {
  getUserWithUserNameUsers(db, email) {
    return db("users").where({ email }).first();
  },

  getUserWithUserNameVenues(db, email) {
    return db("venues").where({ email }).first();
  },

  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash);
  },

  parseBasicToken(token) {
    return Buffer.from(token, "base64").toString().split(":");
  },
  createJwt(subject, payload) {
    return jwt.sign(payload, config.JWT_SECRET, {
      subject,
      algorithm: "HS256",
    });
  },
  verifyJwt(token) {
    return jwt.verify(token, config.JWT_SECRET, {
      algorithms: ["HS256"],
    });
  },
};

module.exports = AuthService;
