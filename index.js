const express = require('express');
const app = express();
const port = process.env.PORT ? process.env.PORT : 7000;
const host = `127.0.0.1`;
// const url = `http://127.0.0.1:7000/`
const Routes = require('./routes/routeIndex.js');
// var router = express.Router()
const connectDB = require('./db/connection');
require('dotenv').config();

// middleware
app.use(express.json())

class Server {
  constructor() {
    console.log("Entered inside constructor")
    console.log("exited from constructor\n")
  }

  // executeApplicationMiddleware() {
  //   console.log("starting to execute the middleware")
  //   // Application level middleware
  //   app.use((req, res, next) => {
  //     console.log(`Executing first middleware code`);
  //     next();
  //   }, (req, res, next) => {
  //     console.log(`Executing second middleware code`);
  //     next();
  //   });
  //   console.log("executed the middleware\n")
  // }

  init() {
    app.use('/', Routes)
  }

  async startServer() {
    try{
      await connectDB(process.env.DB_URL);
      // this.executeApplicationMiddleware();
      app.listen(port, host, (error) => {
        if (!error) {
          console.log(`Server is running and listening on port ${port} and host ${host}`);
          this.init();
        } else {
          console.log(`Error occurred, server can't start: ${error}`);
        }
      })
    }catch(err){
      console.log(err)
    }
  }
}

const server = new Server();
server.startServer();