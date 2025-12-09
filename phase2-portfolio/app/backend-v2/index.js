const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({
    version: "v2",
    color: "#4db5ff",         
    hostname: os.hostname(),
    time: new Date().toLocaleString(),
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend v2 running on port ${PORT} (host=${os.hostname()})`);
});
