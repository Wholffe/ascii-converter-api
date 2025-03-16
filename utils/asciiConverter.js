const sharp = require('sharp');
const path = require('path');

const asciiChars = "@%#*+=-:. ".split("").reverse();

function isValidImage(file) {
  const validExtensions = ['.jpeg', '.jpg', '.png'];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  return validExtensions.includes(fileExtension);
}

async function imageToAscii(imageBuffer, max_width = 150, max_height = 150) {
  try {
    const metadata = await sharp(imageBuffer).metadata();
    let { width, height } = metadata;
    
    if (width > max_width || height > max_height) {
      const widthRatio = max_width / width;
      const heightRatio = max_height / height;
      
      const scaleRatio = Math.min(widthRatio, heightRatio);
      width = Math.floor(width * scaleRatio);
      height = Math.floor(height * scaleRatio);
    }

    const { data, info } = await sharp(imageBuffer)
      .resize(width, height)
      .grayscale()
      .raw()
      .toBuffer({ resolveWithObject: true });

    let asciiImage = '';
    for (let y = 0; y < info.height; y++) {
      for (let x = 0; x < info.width; x++) {
        const i = y * info.width + x;
        const grayscale = data[i];
        const index = Math.floor(grayscale / 255 * (asciiChars.length - 1));
        asciiImage += asciiChars[index];
      }
      asciiImage += "\n";
    }

    return asciiImage;
  } catch (error) {
    console.error("Error processing image:", error);
    return "Error converting image to ASCII";
  }
}

module.exports = { isValidImage, imageToAscii };
