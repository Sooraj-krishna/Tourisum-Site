import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cards.css";

const PlacesList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/places");
      setPlaces(response.data);
    } catch (err) {
      console.error("Error fetching places:", err);
      alert("Error fetching places. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    console.log("Deleting place with ID:", id); 
    try {
      await axios.delete(`http://localhost:5000/api/places/${id}`);
      setPlaces((prevPlaces) => {
        const updatedPlaces = prevPlaces.filter((place) => place._id !== id);
        console.log("Updated places list:", updatedPlaces); 
        return updatedPlaces;
      });
      console.log("Place deleted successfully!");
    } catch (err) {
      console.error("Error deleting place:", err);
      alert("Error deleting place. Please try again.");
    }
  };

  return (
    <div className="container">
      {places.length === 0 ? (
        <p>No Newly Added Places..!</p>
      ) : (
        places.map((place) => (
          <div
            key={place._id}
            className="cards"
            style={{
              backgroundImage: `url(${place.image})`,
            }}
            onClick={() => window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(place.title)}`, '_blank')}
          >
            <button
              onClick={() => handleDelete(place._id)}
              className="delete-btn"
            >
              ×
            </button>
            <div className="content">
              <h3>{place.title}</h3>
              <p>{place.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PlacesList;
