const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TouristPlace = require("./models/TouristPlace");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());

mongoose
  .connect(
    'mongodb://atlas-sql-6779881baa5ef962353434d1-l9v3z.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin'
  )
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/api/places", async (req, res) => {
  const { title, description, image } = req.body;
  try {
    const newPlace = new TouristPlace({
      title,
      description,
      image,
    });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (err) {
    console.error("Error saving place:", err);
    res.status(500).json({ error: "Failed to save place" });
  }
});

app.get("/api/places", async (req, res) => {
  try {
    const places = await TouristPlace.find();
    res.status(200).json(places);
  } catch (err) {
    console.error("Error fetching places:", err);
    res.status(500).json({ error: "Failed to fetch places" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));