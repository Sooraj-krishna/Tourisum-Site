const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const TouristPlace = require("./models/TouristPlace");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());

// MongoDB Atlas URI and MongoClient setup
const uri =process.env.MongoDB_Atlas_URI;

// Create a MongoClient instance with MongoClientOptions
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectMongo() {
  try {
    // Connect the MongoClient to the server
    await client.connect();
    // Send a ping to confirm the connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Once MongoDB connection is successful, connect Mongoose
    mongoose.connect(uri)
      .then(() => console.log("MongoDB connected using Mongoose"))
      .catch((err) => console.error("MongoDB connection error:", err));

  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
  }
}

connectMongo();

// Routes for API
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

app.delete('/api/places/:id', async (req, res) => {
  try {
    const result = await TouristPlace.findByIdAndDelete(req.params.id); // Use TouristPlace instead of Place
    if (!result) return res.status(404).send("Place not found");
    res.status(200).send("Place deleted successfully");
  } catch (err) {
    console.error("Error deleting place:", err); // Log detailed error
    res.status(500).send("Error deleting place");
  }
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
