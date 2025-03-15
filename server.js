const express = require('express');
const multer = require('multer');
const { isValidImage, imageToAscii } = require('./utils/asciiConverter');

const app = express();
const PORT = 3000;

const upload = multer({ storage: multer.memoryStorage() });

app.get('/', (req, res) => res.send('Hello World'));

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  if (!isValidImage(req.file)) {
    return res.status(400).send('Invalid file type. Only JPEG, JPG, and PNG are allowed.');
  }

  try {
    const asciiImage = await imageToAscii(req.file.buffer);
    res.status(200).json({ asciiArt: asciiImage });
  } catch (err) {
    console.error('Error processing the image:', err);
    res.status(500).send('Error processing the image.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});