const express = require('express');
const cors = require('cors');
const multer = require('multer'); // for image upload
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');

const app = express();
const port = 5000;

// Storage configuration for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// CORS middleware
app.use(cors());

// Image routes
app.use('/images', imageRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
