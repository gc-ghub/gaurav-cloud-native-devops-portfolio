const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({
    version: "v2",
    theme: "dark",
    color: "#0ea5e9",   // Tailwind sky-500 / nice blue for dark theme
    name: "Gaurav",
    intro: "Hello 👋 I'm Gaurav — Welcome to Backend Version 2!",
    skills: [
      "Kubernetes",
      "Azure AKS",
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Istio",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "Service Mesh",
      "Canary Deployments",
      "Cloud-Native Design"
    ],
    message: "Response from backend v2"
  });
});

app.listen(5000, () => {
  console.log("Backend v2 running on port 5000");
});
