const sharp = require('sharp');
const path = require('path');

const asciiChars = "@%#*+=-:. ";

function isValidImage(file) {
  const validExtensions = ['.jpeg', '.jpg', '.png'];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  return validExtensions.includes(fileExtension);
}

async function imageToAscii(imageBuffer) {
  const width = 100;

  const image = await sharp(imageBuffer)
    .resize(width)
    .grayscale()
    .raw()
    .toBuffer();

  const { data, info } = await sharp(image)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const height = Math.floor(info.height * 0.5);

  let asciiImage = '';
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x);
      const grayscale = data[i];
      const index = Math.floor(grayscale / 255 * (asciiChars.length - 1));
      asciiImage += asciiChars[index];
    }
    asciiImage += "\n";
  }

  return asciiImage;
}

module.exports = { isValidImage, imageToAscii };
