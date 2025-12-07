const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 8080;
const VERSION = "v3";

app.get("/", (req, res) => {
  const hostname = os.hostname();
  const time = new Date().toLocaleString();

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Portfolio Backend ${VERSION}</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f5efff;  /* v3 theme color */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .container {
        text-align: center;
        max-width: 800px;
      }
      h1 {
        font-size: 48px;
        margin-bottom: 10px;
      }
      h1 span {
        color: #7b2cbf; /* purple accent */
        font-weight: bold;
      }
      p.subtitle {
        font-size: 18px;
        color: #333;
        margin-bottom: 25px;
        line-height: 1.4;
      }

      /* ICON STYLING */
      .icons img {
        height: 50px;
        margin: 12px;
        cursor: pointer;
        filter: drop-shadow(0px 1px 3px rgba(0,0,0,0.3));
        transition: transform 0.15s ease-in-out;
      }
      .icons img:hover {
        transform: scale(1.15);
      }

      .meta {
        margin-top: 30px;
        font-size: 14px;
        color: #444;
      }
    </style>
  </head>

  <body>
    <div class="container">

      <h1>Hi all 👋 I'm <span>Gaurav</span></h1>

      <p class="subtitle">
        A passionate <b>DevOps Engineer</b> experienced with Terraform, Kubernetes, AWS,
        GitHub Actions, Docker, CI/CD, ArgoCD, Service Mesh, and cloud-native platforms.
      </p>

      <div class="icons">

        <!-- GitHub -->
        <a href="https://github.com/gc-ghub" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg">
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/gc-devops-world" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg">
        </a>

        <!-- AWS SysOps Administrator – Associate -->
        <a href="https://www.credly.com/badges/24112ed0-2367-47e7-85e9-00650f57b591" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg">
        </a>

        <!-- AWS Developer – Associate -->
        <a href="https://www.credly.com/badges/e942f9bd-2cae-4bdf-bc03-243a0aafff81" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg">
        </a>

        <!-- GitHub Actions Certification -->
        <a href="https://www.credly.com/badges/f2a62087-9e9b-47fd-9ed2-c34c1b8c8b7b" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/githubactions.svg">
        </a>

        <!-- Terraform Associate -->
        <a href="https://www.credly.com/badges/a61f19e5-7f64-4aad-b593-e5bfed95a1c5" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/terraform.svg">
        </a>

      </div>

      <div class="meta">
        <b>Version:</b> ${VERSION} <br>
        <b>Host:</b> ${hostname} <br>
        <b>Time:</b> ${time}
      </div>

    </div>
  </body>
  </html>
  `;

  res.send(html);
});


app.listen(PORT, () =>
  console.log(`Backend v3 running on port ${PORT} (host=${os.hostname()})`)
);
