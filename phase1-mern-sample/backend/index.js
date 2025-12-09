const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express Backend (This is Phase 1)" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
