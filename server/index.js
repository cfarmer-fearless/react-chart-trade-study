import express from "express";
import cors from "cors";
const app = express();
const port = 8081;

import statusData from "./data/status.json" assert { type: "json" };

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello")
})

app.get("/status", (req, res) => {
  res.json(statusData);
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
