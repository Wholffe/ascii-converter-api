const sharp = require('sharp');
const path = require('path');

const GLOBAL_ASCII_CHARS = "@%#*+=-:. "; // ASCII characters from darkest to lightest
const GLOBAL_DETAILED_ASCII_CHARS = "@MNQOC*+=-;:. ";

function isValidImage(file) {
  const validExtensions = ['.jpeg', '.jpg', '.png'];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  return validExtensions.includes(fileExtension);
}

async function imageToAscii(imageBuffer, max_width = 150, max_height = 150, reverse_chars = false, detailed_mode = false) {
  let ascii_chars = detailed_mode ? GLOBAL_DETAILED_ASCII_CHARS : GLOBAL_ASCII_CHARS;
  ascii_chars = reverse_chars ? ascii_chars.split('').reverse().join('') : ascii_chars;

  const metadata = await sharp(imageBuffer).metadata();
  let { width, height } = metadata;

  if (width > max_width || height > max_height) {
    const width_ratio = max_width / width;
    const height_ratio = max_height / height;
    
    const scaleRatio = Math.min(width_ratio, height_ratio);
    width = Math.floor(width * scaleRatio);
    height = Math.floor(height * scaleRatio);
  }

  const { data, info } = await sharp(imageBuffer)
    .resize(width, height)
    .grayscale()
    .normalize()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let asciiImage = '';
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = y * info.width + x;
      const grayscale = data[i];
      const index = Math.floor(grayscale / 255 * (ascii_chars.length - 1));
      asciiImage += ascii_chars[index];
    }
    asciiImage += "\n";
  }

  return asciiImage;
}

module.exports = { isValidImage, imageToAscii };
