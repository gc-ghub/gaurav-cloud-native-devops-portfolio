const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({
    version: "v1",
    color: "#d0e7ff",          
    hostname: os.hostname(),
    time: new Date().toLocaleString(),
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend v1 running on port ${PORT} (host=${os.hostname()})`);
});
