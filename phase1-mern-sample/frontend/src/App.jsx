import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error fetching message"))
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MERN Phase 1</h1>
      <h2>Backend says:</h2>
      <p style={{ fontSize: "20px", color: "purple" }}>
        {message}
      </p>
    </div>
  )
}

export default App
