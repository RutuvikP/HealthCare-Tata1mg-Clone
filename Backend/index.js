const express = require("express");
const cors = require("cors");

const { connection } = require("./db");
const { userrouter } = require("./routes/userroute");

const { auth } = require("./middleware/Authmiddleware");


require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userrouter);

app.use(auth);



app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("all ok");
  } catch (error) {
    console.log(error);
  }
  console.log("8080 running");
});
