### Scripts
- Install: ```npm i```
- Build: ```npm run build```
- Lint: ```npm run lint```
- Prettify: ```npm run prettier```
- Run unit tests: ```npm run test```
- Start server: ```npm run start```
- Start server in-dev mode: ```npm run start:dev```
- Start server build: ```npm run start:build```

### Usage
The server will listen on port 3000:

#### Brief instructions
http://localhost:3000/

#### Endpoint to resize images
http://localhost:3000/api/images

Expected query arguments are:
- _filename_: Available filenames are:
  - encenadaport
  - fjord
  - icelandwaterfall
  - palmtunnel
  - santamonica
- _width_: numerical pixel value > 0
- _height_: numerical pixel value > 0
_**Note**: width and height must not contain any string value._

#### Example 1
http://localhost:3000/api/images
Will display a hint

#### Example 2
http://localhost:3000/api/images?filename=encenadaport
Will display the original encenadaport image.

#### Example 3
http://localhost:3000/api/images?filename=encenadaport&width=650&height=650
Will scale the encenadaport image to 650 by 650 pixels and store the resulting image.
On subsequent calls will serve the resized image instead of resizing the original again.
