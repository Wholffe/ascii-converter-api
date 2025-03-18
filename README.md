# ASCII Image API

A simple Node.js API that converts an uploaded image into ASCII art.

## Download and Installation
- Docker (recommended) [Docker's official website](https://www.docker.com/).

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Wholffe/ascii-converter-api.git
   ```

## Installation via Docker (recommended)

2. **Build the Docker image:**
   ```sh
   docker build -t ascii-converter-api .
   ```

3. **Run the container:**
   ```sh
   docker run -p 3000:3000 --name "ascii-converter-api" ascii-converter-api
   ```

### OR

### Installation Without Docker
- Node.js installed on your system [Node.js official website](https://nodejs.org/).

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the server:**
   ```sh
   npm start
   ```

### API Endpoints:
To check if the API is running, open your browser or an API client and visit:
`http://localhost:3000`

You should see the response:
Use POST /upload to convert an image to ASCII art.

### `POST /upload`

**Description:**\
Uploads an image and returns its ASCII representation.

**Request:**

- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Body Fields**
  - `file` (required): The image file to convert.
  - `max_width` (optional): The maximum width of the ASCII art (default: 150).
  - `max_height` (optional): The maximum height of the ASCII art (default: 150).
  - `reverse_chars` (optional): A boolean (`true` or `false`) to reverse the order of ASCII characters used for rendering (default: `false`).

#### **Example Request (Using curl)**

```sh
curl -X POST -F "file=@yourfile.txt" http://localhost:3000/upload
```

#### **Json Representation**

```json
{
  "method": "POST",
  "url": "http://localhost:3000/upload",
  "headers": {
    "Content-Type": "multipart/form-data"
  },
  "body": {
    "file": {
      "filename": "image.png",
      "content_type": "image/png",
      "data": "(binary data here)"
    },
    "max_width": 100,
    "max_height": 100
  }
}
```

#### **Example Response (ASCII Art of the Image)**

```html
HTTP/1.1 200 OK
Content-Type: html
Content-Length: 4859
```
<pre>                                                                                
                                                                                
                                       ......                                   
                                      ..    ..                                  
                                       .::... ..                                
                                    . .=+++*+-.                                 
                                     .-*###*##=. .                              
                                    .-+*#######= .                              
                                  . .-+*#######+. .                             
                                  . :+++==+==+#*. .                             
                                  . -*+++=====**. .                             
                                  . -*+++=====++.                               
                                  . :++**+=+==*+ .                              
                                   .--++++=++=+: .                              
                                 . :=-++++=====.                                
                                 . .==++++=====.                                
                                  . :-++++===+- .                               
                                   . :++*+===-. .                               
                                   . :++++===.                                  
                                   . -+++==+- .                                 
                                  .. =++*+++- .                                 
                               .... .=+++===-. ...                              
                             ..   ..=++++====#: . ...                           
                           ..  .:==-=+==+++-=%%+-.   ..                         
                          .. .-+##+--+++++-:+%%%%#+-.  ..                       
                         . .=*#%%%+--+*+=---#%%%%%%%#+:..                       
                        . .*#%%%%%+-=+*+---*%%%%%%%%%%%+. .                     
                        . -%%%%%%%#****+=-=%%%%%%%%%%%%%- .                     
                        . =%%%%%%%%%+**+++*%%%%%%%%%%%%%+ .                     
                        . +%%%%%%%%#*+++++*%%%%%%%%%%%%%#. .                    
                        . +%%%%%%%%#*+=+++#%%%%%%%%%%%%%%: .                    
                        . *%%%%%%%%#*+=++*%%%%%%%%%%%%%%%- .                    
                         .*%%%%%%%%#*+=++*%%%%%%%%%%%%%%%: .                    
                       . .#%%%%%%%%%*+=**#%%%%%%%%%%%%%%%- .                    
                       . .#%%%%%%%%%*+***#%%%%%%%%%%%%%%%+ .                    
                       . .#%%%%%%%%%*****%%%%%%%@@%%%@@%%#. .                   
                       . .#%%%%%%%%%#+**#%%%%%#*##%%%@%%%%- .                   
                       . .#%%%%%%%%%#***#%%%%%#++++*%@%%%%%- .                  
                       . .%%%%%%%%%%%***#%%%%%**++++%@%@%%%%: .                 
                       . :%%%@%%%%%%%***%%%%%%%*+++=#@%%%%%%#: .                
                       . -%%%%@%%%%%%#*#%%%%%%%**++=*%%%%%%%@*                  
                       . -%%%%%%%@%%%#*#%%%%%%%%*+++*%%%%%%%%#. .               
                       . -%%%%%@@%%###*#%%%%%%%@@%*++%%%%%%%%#. .               
                       . .+#%%%#+**+*#*#%%%%%%%@@@%*#%%%%%%%%#. .               
                        . -%%##++**+*#*%%%%%%@@@@@@@@@@%#%%%%#. .               
                        . :%%#%*+****#*%%%%@@@@@@@@@%%@##%%%%%. .               
                           +%%%#****#%*%@%@@@@@@@@@@@@@@@%%%%+ .                
                           .-#%%****%%*%@%@@@@@*#@@@@@@#+*#*-                   
                           . .=%###%@%#%@@@@@@@%%@@@@@%: ... .                  
                           ... -%%@@@%#@@@@@@@@@@@@@@@%. . ..                   
                             . -*%@%@%#@@@@@@@@@@@@%%%%. ...                    
                             . -#%%%@%#@@@@@@@@%%%%%%%%: .                      
                             . +%%%%@%#@@@@@@@%%%%%%%%%- .                      
                              .*@%%%@##%@@@@@@%%%%%%%%@= .                      
                            . .##%%%@##%%@@@@@@@%%%%%%%+ .                      
                            . .%%%%%%##%%@@@@@%#%%%%%%%* .                      
                            . :%%%%%%##%%@@@@@##%%%%%%%*                        
                            . -%%%%%%#*%%@@@@@@%%%%%%%%#. .                     
                            . =%%%%%%#*%@@@@@@@%%%%%%%%#. .                     
                              +%%%%%%*+#@@@@@@@@%%%%%%%#. .                     
</pre>

## Contribution

Contributions to this repository are welcome! If you have additional ideas or improvements, feel free to submit pull requests.

## License

This repository is licensed under the [MIT License](./LICENSE).
