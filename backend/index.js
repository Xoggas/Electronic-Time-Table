import express from "express";

const app = express();
const port = 4000 || process.env.PORT;

app.listen(port, () => {
  console.log("Listening to:", port);
});