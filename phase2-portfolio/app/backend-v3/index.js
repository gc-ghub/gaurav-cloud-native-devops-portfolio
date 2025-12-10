const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
  const weight = process.env.TRAFFIC_WEIGHT || "unknown";

  res.json({
    version: "v3",               
    color: "#a41419ff",            
    hostname: os.hostname(),
    time: new Date().toLocaleString(),
    random: Math.random().toString(36).slice(2, 8),
    weight: weight,
    message: "🔥 Backend v3 says HELLO — latest code deployed!",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend v3 running on port ${PORT}, weight=${process.env.TRAFFIC_WEIGHT}`);
});
