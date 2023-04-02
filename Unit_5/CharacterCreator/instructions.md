# Character Creator

## Concept

This is an in-class build where we are creating a quick server that covers the CRUD functionality.

# Server Requirements

## JSON Model

```json
{
  "id": 0,
  "name": "String",
  "classType": "String",
  "age": 00,
  "race": "String",
  "npc": false,
  "level": 00
}
```

## Dependencies

- `express`
- `dotenv`

## Endpoints

- base: `localhost:[PORT#]`
- character controller: `/characters`
- route endpoints determined by method and outcome.

## Routes

- GET One by ID
- GET All
- GET All by class
- POST One
- PUT One by ID
- DELETE by ID

---

## Task List

| Status | Task                             | Process                                           |
| ------ | -------------------------------- | ------------------------------------------------- |
| x      | Initialize Project               | `npm init -y`                                     |
| x      | Install Dependencies             | `npm i express` `npm i dotenv`                    |
| x      | Install Dev Dependencies         | `npm install --save-dev nodemon`                  |
| x      | Establish Entry Point            | `app.js` or `index.js`                            |
| x      | Create Environmental File        | Create a file called .env                         |
| x      | Create Sample Environmental File | Add our PORT # to it to hide it                   |
| x      | Create gitignore file            | Create the .gitignore file                        |
| x      | Set gitignore                    | Add node_modules & .env                           |
| x      | Connect to PORT / Test           | Set up our app.js file                            |
| x      | Create Helpers Folder            |                                                   |
| x      | Create db.json file              |                                                   |
| x      | Est. first Entry                 | The middle URL that takes us to the controller    |
| x      | Create Controller Folder         |                                                   |
| x      | Create controller file           | Create a character.controller.js file             |
| x      | Connect Controller               | Properly require in Router and export file        |
| x      | Establish Routes                 | Scope out/make to-dos for routes                  |
| x      | Build GET All                    | (Look at routes.controller of ToDoList for clues) |
| x      | Test Route                       | POSTMAN                                           |
| x      | Build GET One                    |                                                   |
| x      | Test Route                       |                                                   |
| x      | Build GET All by Class           |                                                   |
| x      | Consider conditions              | Spelling/capitalization .toLowerCase()            |
| x      | Test Route                       |                                                   |
|        | Build POST One                   |                                                   |
|        | Test Route                       |                                                   |
|        | Build PUT One by ID              |                                                   |
|        | Test Route                       |                                                   |
|        | Build DELETE One by ID           |                                                   |
|        | Test Route                       |                                                   |

## Stretch Goals

| Stretch Goals                                      | Status            |
| -------------------------------------------------- | ----------------- |
| `POST` - What if a character ID already exists?    | Solution Provide  |
| `PUT` - What if one key is changed in a character? | Solution Provided |

### POST

- Consider how and when do we obtain our DB ids.
- How can we hold on to the current values?
  - Consider reviewing `Math` methods and `spread`.
  - `IF` the established generated ID already exists (`includes`), consider the greatest value and reset the ID based off that.

### PUT

- What key is being passed?
  - Review current values within the DB.
  - Consider how you can cycle through each key and respond depending on what's being passed.
    - If key matches - replace value / if not - keep value.
- What if the there isn't a character to change?
  - How do we handle the `404`

---
