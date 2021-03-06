require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const app = express();
const { CLIENT_ORIGIN } = require("./config");

const UserRouter = require("./Routers/usersRouter");
const LoginRouter = require("./Routers/loginRouter");
const VenueRouter = require("./Routers/venuesRouter");
const BookingsRouter = require("./Routers/bookingsRouter");

const morganSetting = process.env.NODE_ENV === "production" ? "tiny" : "common";
app.use(morgan(morganSetting));
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, bookapp!");
});
app.use("/login", LoginRouter);
app.use("/bookings", BookingsRouter);
app.use("/users", UserRouter);
app.use("/venues", VenueRouter);
app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
