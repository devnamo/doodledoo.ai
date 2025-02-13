import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/generate-doodle", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "512x512",
      }),
    });

    const data = await response.json();
    res.json({ imageUrl: data.data[0].url });
  } catch (error) {
    console.error("Error generating doodle:", error);
    res.status(500).json({ error: "Failed to generate doodle" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
