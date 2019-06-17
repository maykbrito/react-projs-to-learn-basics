![View Image](https://i.imgur.com/3tf6EWN.png)

# CREATE PROJECT

Here is some notes to remember how to create this project from scracth.

With npm install express nodemon mongoose body-parser concurrently

## STEP 1: SERVER

To create server remember this steps

1. Do imports
2. Create app
3. bodyParser middleware
4. DB config
5. Connect to mongo
6. Run server (create port)

Create a folder called config and inside put keys.js and export an object with mongoURI (your mlabs database as value)

## STEP 2: API

1. Create a Schema with mongoose. Schema must be contain a required name field and a date field with default value for date
2. Create item routes (get post delete)

## STEP 2.1: BRIDGE

1. Create a package script to run concurrently 2 tasks (server and client)

## STEP 3: CLIENT (react)

1. Create a client folder and install react there.
2. This app will use bootstrap reactstrap and
