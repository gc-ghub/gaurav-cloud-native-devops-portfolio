const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({
    version: "v1",
    theme: "light",
    color: "#800080",
    name: "Gaurav",
    intro: "Hi all 👋 I'm Gaurav — DevOps Engineer",
    skills: [
      "Kubernetes",
      "Azure AKS",
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "ArgoCD",
      "Istio",
      "Service Mesh"
    ],
    message: "Response from backend v1"
  });
});

app.listen(5000, () => {
  console.log("Backend v1 running on port 5000");
});
