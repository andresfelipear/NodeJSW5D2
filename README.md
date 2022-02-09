
#### Overview of dependencies for backend

- express: the web framework

- jsonwebtoken: library for signing/creating and verifying/validating JSON Web Tokens (JWT), often pronounced 'JOT' for some reason.

- bcryptjs: library for hashing strings like password and then comparing the hash to strings for validation.

- morgan: library for logs that can be helpful for debugging

- dotenv: library to allow for use of .env files

- mercedlogger: A library I created for colorful logs

- mongoose: ODM for connecting and sending queries to a mongo database

- cors: adds cors headers so our frontend app can make requests

<hr>

- install dev dependencies `npm install --save-dev nodemon`

- add scripts to package.json

```json
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```

- create a .gitignore file

```
/node_modules
.env
```

- create a .env file

```
PORT=8000
DATABASE_URL=mongodb://localhost:27017/mockauth
SECRET="someSuperSecretKey"
```
* Note that the database url is assuming a local mongo database, if you don't have a local mongo database replace with url with a database hosted at mongodb.com. The secret key can be literally anything.

generic-tdd-auth-backend – Deployment Source