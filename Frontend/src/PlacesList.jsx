import React, { useEffect, useState } from "react";
import axios from "axios";

const PlacesList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/places");
        setPlaces(response.data);
      } catch (err) {
        console.error("Error fetching places", err);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <div>
      {places.map((place) => (
        <div key={place._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{place.title}</h3>
          <p>{place.description}</p>
          <img src={place.image} alt={place.title} style={{ width: "100%", height: "auto" }} />
        </div>
      ))}
    </div>
  );
};

export default PlacesList;
