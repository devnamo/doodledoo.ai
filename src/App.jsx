/*import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const generateDoodle = async () => {
    if (!prompt) return alert("Please enter a prompt!");

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/generate-doodle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setImage(data.imageUrl);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Doodle Generator 🎨</h1>
      <p>Generate cool AI-based doodles with one click!</p>

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt..."
        style={{
          padding: "10px",
          width: "60%",
          borderRadius: "5px",
          border: "1px solid gray",
          marginBottom: "10px",
        }}
      />

      <br />

      <button
        onClick={generateDoodle}
        disabled={loading}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Doodle"}
      </button>

      {image && !loading && (
        <div style={{ marginTop: "20px" }}>
          <img src={image} alt="Doodle" style={{ borderRadius: "10px" }} />
        </div>
      )}
    </div>
  );
}

export default App;*/
import DoodleGenerator from "./components/DoodleGenerator";

function App() {
  return (
    <div>
      <DoodleGenerator />
    </div>
  );
}

export default App;




