# ASCII Image API

A simple Node.js API that converts an uploaded image into ASCII art.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Wholffe/ascii-converter-api.git
   cd ascii-image-api
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the server:**
   ```sh
   npm start
   ```

## API Endpoints

### `POST /upload`

**Description:**\
Uploads an image and returns its ASCII representation.

**Request:**

- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Parameters:**
  - `file` (required): The image file to convert.

#### **Example Request (Using **``**)**

```sh
curl -X POST http://localhost:3000/upload \
     -F "file=@path/to/your/image.png"
```

#### **Example Response (ASCII Art of the Image)**

```txt
HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: 1234

<exaple-art>
```

## Contribution

Contributions to this repository are welcome! If you have additional ideas or improvements, feel free to submit pull requests.

## License

This repository is licensed under the [MIT License](./LICENSE).
