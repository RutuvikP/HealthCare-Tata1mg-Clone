const express = require("express");
const cors = require("cors");
// const { auth } = require("./auth/auth");
const { connection } = require("./db");
const { userrouter } = require("./routes/userroute");
const { postroute } = require("./routes/postroute");
const { auth } = require("./middleware/Authmiddleware");
// const { userrouter } = require("./route/userroutes");
// const { postroute } = require("./route/postroute");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userrouter);

app.use(auth);
// app.use("/posts", postroute);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("all ok");
  } catch (error) {
    console.log(error);
  }
  console.log("8080 running");
});
