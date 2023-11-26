import express from "express"; //this lone of code can also be written '  const express = require("express");  'but after inserting the type module in package.json import will work
import dotenv from "dotenv";
import mongoose from "mongoose"; //this allows us to use mongodb
import authRoutes from "./Routes/auth.js";
import route from "./Routes/route.js";
import enquiry from "./Routes/enquiry.js"
import vehicle from "./Routes/vehicle.js";
import booking from "./Routes/booking.js";
import morgan from "morgan"; // morgan is a middleware that will return what type of request is made and the endpoints of those request.
import cors from "cors";

dotenv.config;

// Load environment variables from a .env file

const app = express();

//DB connection
mongoose
  .connect(
    "mongodb+srv://okukunaftali472:G7Pigw3kGBTa6Nlp@bustrasportsystem.iq3wney.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log("Err => ", err));



//morgan middleware it ruturn http status code and other middleware functions.
app.use(cors()); // this library course enable api calls from different http request.
app.use(morgan("dev"));
app.use(express.json());



//this is a middleware (router middleware) a middleware between the express and routes, i think since it is on another folder
app.use("/api", authRoutes);
app.use("/api", route); //middleware done
app.use("/api", vehicle);
app.use("/api", enquiry);
app.use("/api", booking);


const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log("the server is listening to port 8000");
});
