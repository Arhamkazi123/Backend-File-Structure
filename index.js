import "./config.js";
import express from "express";
import { router } from "./Router/auth-router.js";
import { connectdb } from "./utils/db.js";

const app = express();
const PORT = 5000;

app.use(express.json()); //middleware
app.use("/api/auth", router);

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running ");
  });
});
