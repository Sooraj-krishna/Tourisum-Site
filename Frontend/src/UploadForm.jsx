import React, { useState } from "react";
import axios from "axios";
import "./upload.css";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/places", {
        title,
        description,
        image,
      });
      alert("Tourist place uploaded successfully!");
    } catch (err) {
      alert("Error uploading place.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input type="file" accept="image/*" onChange={handleImageChange} required />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
