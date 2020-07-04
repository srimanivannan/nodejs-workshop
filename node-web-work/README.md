### Setup
```
npm init // you will have to answer questions
npm install express

node app.js // To run application

// Tools
npm i eslint -D // check style -D represents add it Dev dependencies in package.json
```
#### add eslint. (not globally. add it through scripts tag in package.json)
```
"scripts": {
    "lint": "eslint",
    "test": "echo \"Error: no test specified\" && exit 1"
}

then run below command
npm run lint -- --init // you will have to answer question

add "." to eslint 
"scripts": {
    "lint": "eslint .",
    "test": "echo \"Error: no test specified\" && exit 1"
}
npm run lint 
```
### add nodemon, so that we don't have to restart server. it's gonna watch files and restart automatically
### 
```
npm install nodemon

"scripts": {
    "lint": "eslint .",
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

  "nodemonConfig": {
    "restartable": "rs",
    "ignore": ["node_modules/**/node_modules"],
    "delay": 2500,
    "env": {
      "NODE_ENV": "development",
      "PORT": 4000
    }
  }

npm start // it's gonna run from scripts

```
______
