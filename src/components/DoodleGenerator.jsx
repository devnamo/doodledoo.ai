import { useState } from "react";
import "./DoodleGenerator.css"; // Styling ke liye alag CSS file rakho

const DoodleGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [doodleUrl, setDoodleUrl] = useState(null);

  const generateDoodle = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    
    try {
      const response = await fetch("https://api.example.com/generate-doodle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setDoodleUrl(data.imageUrl); // API se aayi doodle image ko set karo
    } catch (error) {
      console.error("Error generating doodle:", error);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      generateDoodle();
    }
  };

  return (
    <div className="doodle-container">
      <h1 className="title">🎨 DoodleDoo ✨</h1>
      <p className="subtitle">Type a prompt and press Enter to generate a doodle!</p>
      
      <input
        type="text"
        className="input-box"
        placeholder="Enter a doodle idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      
      <button className="generate-btn" onClick={generateDoodle} disabled={loading}>
        {loading ? "Generating..." : "Generate Doodle"}
      </button>

      {doodleUrl && <img src={doodleUrl} alt="Generated Doodle" className="doodle-img" />}
    </div>
  );
};

export default DoodleGenerator;
