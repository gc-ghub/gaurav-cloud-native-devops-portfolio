const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
  const weight = process.env.TRAFFIC_WEIGHT || "unknown";

  res.json({
    version: "v1",             
    color: "#d0e7ff",            
    hostname: os.hostname(),
    time: new Date().toLocaleString(),
    random: Math.random().toString(36).slice(2, 8),
    weight: weight,
    message: `Hey, I'm backend v1 and I am configured to receive ${weight}% of traffic.`,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend v1 running on port ${PORT}, weight=${process.env.TRAFFIC_WEIGHT}`);
});
