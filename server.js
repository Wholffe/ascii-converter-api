const express = require('express');
const multer = require('multer');
const { isValidImage, imageToAscii } = require('./utils/asciiConverter');

const app = express();
const PORT = 3000;

const upload = multer({ storage: multer.memoryStorage() });

app.get('/', (req, res) => res.send('Use POST /upload to convert an image to ASCII art.'));

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  if (!isValidImage(req.file)) {
    return res.status(400).send('Invalid file type. Only JPEG, JPG, and PNG are allowed.');
  }

  const max_width = req.body.max_width ? parseInt(req.body.max_width) : 150;
  const max_height = req.body.max_height ? parseInt(req.body.max_height) : 150;

  try {
    const asciiImage = await imageToAscii(req.file.buffer, max_width, max_height);
    res.status(200).send(`<pre>${asciiImage}</pre>`);
  } catch (err) {
    console.error('Error processing the image:', err);
    res.status(500).send('Error processing the image.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});