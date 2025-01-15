const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const jwt = require('jsonwebtoken')
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", mainRouter);
app.listen(3000);


