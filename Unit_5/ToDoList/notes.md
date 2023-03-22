# Getting Started
- create a `package.json` 
  - In terminal: cli command: `npm init -y`
- Install our dependencies
  - express: `npm i express`
- Create a `.gitignore` file
  - `/node_modules` within .gitignore
    - tells our local repository to ignore the `node_modules` folder when backing up.

- node_modules folder
  - Provides us access to any "behind the scenes" code that helps run express and any dependencies.
  - If anything gets deleted or you're cloning down a project, use `npm install` to get those files back/installed.

- package-lock.json
  - locks project into required dependencies. Helps with our versioning
  - updated our `package.json` with `"main": "app.js"` instead of `index.js`.

- Create a root JS file
  - `app.js` or `index.js`

- Use the command `nodemon` to start the server
  - nodemon is a way for our server to continue to run while we are building/making changes.
  - To stop the server ctrl+c

### Controllers
Our controllers help us set routes for various endpoint. Depending on how we build the path will determine how it responds.

CRUD (Create, Read, Update, Delete)
- Create: POST
- Read: GET
- Update: PUT/ PATCH
- Delete: DELETE

We are going to set up a controller folder and make our first controller file called practice.controller.js

Sending a status code with a route response is good practice for both the user and developer.

## Postman
- Set Methods - w/ dropdown to the left of the URL bar
  - GET / POST / PUT / DELETE depending on route
  - Body, tab label under the URL
    - raw (select the raw value radio button)
    - JSON (blue dropdown to the right of the radio buttons)
    - Make a JSON object (in the body area)

---

## Preparing our server to handle JSON objects
In our `app.js` we need to have this line of code:
```js
app.use(express.json());
```
This provides us access JSON files throughout our routes.