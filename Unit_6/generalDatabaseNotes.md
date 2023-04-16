# Traditional Databases

Database:

- A collection of data stored in tables or documents.

- Sorts data by creating a **primary key (ID)** for each record (of data)
  - Records: data with/in rows of the table

### Two Main Types of Databases:

Relational:

    - Very similar to a table structure (like Excel or Google Sheets)
    - Have a strict structure
    - Tables can be linked using keys
    - Ex: SQL, PostgresSQL, MySQL

Non-Relational:

    - Has 5 Types of Structure: document data store, column-oriented database, key-value store, document store, and graph database
    - Flexible Structure
    - Uses a Primary Key (ID) to give individuality to each document
    - Data is stored as documents containing JSON objects
    - Ex: MongoDB, Apache Cassandra, Couchbase

<br><br>

# MongoDB

- Is a **Document Data Store**
- This is the database system we will be using.

| Mongo Terms                     | Relational Equivalent |
| ------------------------------- | --------------------- |
| Database                        | Database              |
| Collections                     | Tables                |
| Documents (stores data as JSON) | Records (Row of data) |

<br>

## MongoDBCompass

A GUI (Graphical User Interface) for working with MongoDB

- How to create a new collection:

  1. Open MongoDBCompass.
  2. Click "New connection +" button (on your first use, a New Connection form will already be open.)
  3. Click the "Connect" button (usually is green).
  4. This will take you to a new view where we can create or view databases:

  - Click on the **"+"** button next to the "Databases" label.

  5. Add a name for the Database and the Collection, then press the green "Create Database" button.
  6. You should now be able to see your new DB in the left sidebar.

- How to create a new document(record of data) using Compass:

  7.  Click the "ADD DATA" dropdown and select "Insert document".
  8.  Add some JSON and click "Insert".

- Notice our new document has been added to the DB
- An ID has been automatically created for it. (It's a randomized key so that this document could be referenced individually.)
- We can create our records in this fashion, or upload a file to quickly populate a collection.

<br>

# MERN Stack

- M: Mongo, our database
- E: Express, our server
- R: React, our frontend
- N: Node, everything in between

<br>

# Security

Encryption:

- Plain text passwords stored within a database is highly insecure.
- Encryption helps us provide protection to both users and databases

## Bcrypt

- `npm i bcrypt`
- dependency that handles encryption of data.
  - most commonly - passwords
- Uses hashing and salting to hide the password/value so it's nearly impossible to decrypt (hack/solve encryption)

Hashing:

- Hashing produces a one-way randomized string based off the plain text string provided.

  - Uses a hashing algorithm to change plain text into a set of various characters.
  - Uses `salting` as an extra layer of encryption.

  Salting:

- Process of including a randomized string included within the hashing prior to being set to the database.
- This makes it unpredictable as to what the hashed value becomes.
- With bcrypt we can determine how many iterations the hashed value should be salted.
  - Currently 10 to 13 iterations are common for security.

example code:

```js
bcrypt.hashSync("abc123", 10);
```

- first param = password
- second param = number of times the password will be salted.

<br>

## JWT

- JSON Web Token
- `npm i jsonwebtoken`
- A way for our server to authenticate the user.
- Is a token that is considered to allow access during a specific amount of time.

example code:

```js
const token = jwt.sign({ id: user._id }, "secret message", {
  expiresIn: 60 * 60 * 24,
});
```

`sign(payload, message, options)`

3 arguments:

- payload
  - In the sample we are using an object that details the id of the user. Typically details of the user to verify it's them.
- encrypt/decrypt message
  - Passed in as a string in the sample
  - Typically stored as a `.env` variable.
- Options sets (expiration details)
  - represents/details seconds or a strings describing a time span for the token to be valid/when to expire
    - ex: `"2 days"` or `"10h"`
