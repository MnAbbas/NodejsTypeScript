# TypeScript , Mongoose, Restify

Enable REST API service simply.
Adding Mongoose Restify API provider at [Microsoft/Typescript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter)

# Motivation

I am trying to prepare some very simple not complex structure of Nodejs & Golang for who want to learn and find proper resoirce for trying it  

> I used TypeScript for this sample and it is easy to learn , however when you are coding in Typescript you feel better than Node.js itself somehow it look like a programm language not just scripting
> MongoDB is very simple , fast and unique Nosql , along with restify which in my view is weaker than Express but to show how it work you can take a look at them [In Depth Guide on Building a REST API with Typescript, Restify & MongoDB](https://getstream.io/blog/building-rest-api-node-js-restify-mongodb/).

This project trying to suggest REST API by Minimum configuration as possible.

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)

# Getting started
- Clone the repository
```
git clone --depth=1 https://github.com/Microsoft/TypeScript-Node-Starter.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Configure your mongoDB server
```bash
# create the db directory
sudo mkdir -p /data/db
# give the db correct read/write permissions
sudo chmod 777 /data/db
```
- Start your mongoDB server (you'll probably want another command prompt)
```
mongod
```
- Build and run the project
```
npm run build
npm start
```

## Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` and `views` folders remain top level as expected. 
