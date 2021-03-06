# hangman
Simple React/Node implementation of hangman.

## Installation Instructions
1. If NodeJS is not installed:
- `sudo apt get install nodejs`
- `sudo apt get install npm`
2. If MongoDB is not installed:
- Follow instructions for your specific distribution from the [MongoDB Docs](https://docs.mongodb.com/manual/administration/install-on-linux/)
3. Download ZIP or clone the repository

## How to run
1. Start MongoDB
- `sudo service mongod start`
2. Navigate to root of the project, install necessary dependencies and start the server
- `npm install`
- `npm start`
3. Open your favorite browser to http://localhost:3001 and enjoy! (Some of the chosen words can be pretty tough)

Word list courtesy of [Dwl/English Words](https://github.com/dwyl/english-words) 

## Testing
1. To run tests, navigate to the root of the project
- `npm test`

Currently, only the core game logic has been tested. I would like to add tests for the API endpoints in the future.
