### To-Done

Just your run-of-the-mill CRUD todo app. Currently features backend functionality as well as partial frontend functionality.

-------------

#### Requirements
- Node.js
- NPM/Yarn
- MongoDB

#### Server Setup
1. Run `npm install`/`yarn` from the server directory
2. Ensure that the MongoDB service has been started on your machine
3. Run `npm run serve`/`yarn serve` to run the development server

#### Client Setup
1. Run `npm install`/`yarn` from the client directory
2. Run `npm run serve`/`yarn serve` to run the development server
3. Navigate to `localhost:8080` to view the app in your browser

-------------

Currently the only routes the API supports are:
`GET /api/all` - Fetch all Todos
`POST /api/add` - Add a Todo
`GET /api/delete/:id` - Delete a Todo by ID
`POST /api/update/:id` - Update a Todo by ID

-------------

Future plans:
- Add a User model
- Adjust functionality to restrict Todos to the user that created them
- Create sign up/log in routes
- Restrict the main route (viewing todos) to logged in users
- Consider Dockerizing the app
- Completely refactor backend logic
  - Move DB operations into a class responsible for all CRUD to improve on expandability
  - Create Util libraries for some common operations
- Create a React or Vue frontend so the app is actually useable
- Convert to an Electron app so I can use this project as an actual tool