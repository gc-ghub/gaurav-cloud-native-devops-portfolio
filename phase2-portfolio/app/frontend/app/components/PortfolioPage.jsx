export default function PortfolioPage({ version, hostname, time, color, weight, message, random }) {
  // background-color is dynamic based on backend-provided color
  const pageStyle = {
    margin: 0,
    padding: 0,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5efff", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  // allow backend color override
  if (color) {
    pageStyle.backgroundColor = color;
  }

  const containerStyle = {
    textAlign: "center",
    maxWidth: "800px",
  };

  const h1Style = {
    fontSize: "30px",
    marginBottom: "10px",
  };

  const h2Style = {
    fontSize: "45px",
    marginBottom: "10px",
  };

  const spanStyle = {
    color: "#158b08ff",
    fontWeight: "bold",
  };

  const subtitleStyle = {
    fontSize: "30px",
    color: "#333",
    marginBottom: "25px",
    lineHeight: 1.4,
  };

  const iconsStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "20px",
  };

  const iconImage = {
    height: "50px",
    margin: "12px",
    cursor: "pointer",
    filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.3))",
    transition: "transform 0.15s ease-in-out",
  };

  const metaStyle = {
    marginTop: "30px",
    fontSize: "15px",
    color: "#444",
  };

  const extraInfoStyle = {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
    lineHeight: 1.5,
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        
        {/* TITLE */}
        <h1 style={h1Style}>
          DevOps Portfolio — <span style={spanStyle}>{version}</span>
        </h1>

        {/* NAME */}
        <h2 style={h2Style}>
          Hi all 👋 I'm <b>Gaurav</b>
        </h2>

        {/* INTRO MESSAGE */}
        <p className="subtitle" style={subtitleStyle}>
          <br />
          A passionate <b>DevOps Engineer</b> experienced with Terraform, Kubernetes, AWS,
          GitHub Actions, Docker, CI/CD, ArgoCD, Service Mesh, and cloud-native platforms.
          Please explore my portfolio showcasing my projects and skills!
        </p>

        {/* ICON ROW — unchanged */}
        <div style={iconsStyle}>
          <a href="https://github.com/gc-ghub" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              style={iconImage}
            />
          </a>

          <a href="https://www.linkedin.com/in/gc-devops-world" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
              style={iconImage}
            />
          </a>

          <a
            href="https://www.credly.com/badges/24112ed0-2367-47e7-85e9-00650f57b591"
            target="_blank"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg"
              style={iconImage}
            />
          </a>

          <a
            href="https://www.credly.com/badges/e942f9bd-2cae-4bdf-bc03-243a0aafff81"
            target="_blank"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg"
              style={iconImage}
            />
          </a>

          <a
            href="https://www.credly.com/badges/f2a62087-9e9b-47fd-9ed2-c34c1b8c8b7b"
            target="_blank"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/githubactions.svg"
              style={iconImage}
            />
          </a>

          <a
            href="https://www.credly.com/badges/a61f19e5-7f64-4aad-b593-e5bfed95a1c5"
            target="_blank"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/terraform.svg"
              style={iconImage}
            />
          </a>
        </div>

        {/* NEW EXTRA INFO SECTION */}
        <div style={extraInfoStyle}>
          {message && <p><b>Message:</b> {message}</p>}
          {weight && <p><b>Traffic Weight:</b> {weight}%</p>}
          {random && <p><b>Request ID:</b> {random}</p>}
        </div>

        {/* BOTTOM META INFO */}
        <div style={metaStyle}>
          <b>Version:</b> {version} <br />
          <b>Host:</b> {hostname} <br />
          <b>Time:</b> {time}
        </div>
      </div>
    </div>
  );
}
