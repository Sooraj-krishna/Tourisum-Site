---

# **Tourism Site**

## **Overview**

The **Tourism Site** is a full-stack web application that allows users to explore tourist places, upload their own images with descriptions, and interact with the community by sharing interesting locations. The backend is built using **Node.js** with **MongoDB Atlas**, while the frontend is developed using **React**.

---

## **Features**
- 🌍 **Explore** various tourist locations with detailed descriptions and images.
- 📤 **Upload** new tourist places with an image and description.
- 💾 **Data Storage** using **MongoDB Atlas** for persistent storage.
- 🔄 **Responsive Design** for a seamless experience across devices.

---

## **Tech Stack**
- **Frontend:** React, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, MongoDB Atlas
- **Database:** MongoDB Atlas (Cloud-based NoSQL database)
- **Hosting:** (Specify hosting platform, e.g., Vercel, Heroku, etc.)
- **Version Control:** Git & GitHub

---

## **Setup Instructions**

### **1. Clone the repository**
```bash
git clone https://github.com/your-username/tourism-site.git
cd tourism-site
```

### **2. Setup Backend**
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` directory with the following content:
   ```bash
   MONGODB_ATLAS_URI=your_mongodb_connection_uri_here
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### **3. Setup Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd ../Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

---

## **Usage**
1. Open your browser and go to `http://localhost:3000` to access the frontend.
2. The backend runs on `http://localhost:5000`, handling API requests for data storage and retrieval.

---

## **API Endpoints**

| Method | Endpoint             | Description                       |
|--------|----------------------|-----------------------------------|
| GET    | `/api/places`         | Retrieve all tourist places       |
| POST   | `/api/places`         | Upload a new tourist place        |
| DELETE | `/api/places/:id`     | Delete a specific tourist place   |

---

## **Contributing**

Contributions are welcome! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## **Contact**
- **GitHub:**  https://github.com/Sooraj-krishna
- **Email:** soorajkrishnakp2002@gmail.com

---
