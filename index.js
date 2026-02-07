import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Ci we are doing");
});

app.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`);
});
