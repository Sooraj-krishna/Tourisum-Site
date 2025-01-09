import React, { useState } from "react";
import axios from "axios";
import "./upload.css";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: ""
  });
  const [preview, setPreview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/places", formData);
      console.log("Tourist place uploaded successfully!");
      setFormData({ title: "", description: "", image: "" });
      setPreview("");
    } catch (err) {
      console.error("Error uploading place:", err);
      alert("Error uploading place.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id='Upload'>
      <div className="upload-container">
        <form onSubmit={handleSubmit} className="upload-form">
          <h2>Add New Tourist Place</h2>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter place name"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Enter place description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Image</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              className="file-input"
              required 
            />
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Preview" />
              </div>
            )}
          </div>

          <button type="submit">Upload Place</button>
        </form>
      </div>
    </section>
  );
};

export default UploadForm;
