const upload = require('../config/upload'); // Import multer configuration

exports.uploadImage = async (req, res) => {
  try {
    await upload.single('image')(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ message: 'Image uploaded successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
