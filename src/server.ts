// import errorHandler from "errorhandler";

import app from "./app";

/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());

/**
 * Start Express server.
 */


app.on('InternalError', (req, res, err, cb) => {
  let msg = {"error" : "IInternalError"}  
  res.send(500, msg);
  cb();
});
app.on('InternalServerError', (req, res, err, cb) => {
  let msg = {"error" : "InternalServerError"}  
  res.send(500, msg);
  cb();
});
app.on('uncaughtException', (req, res, route, err) => {
  let msg = {"error" : "uncaughtException"}  
  res.send(500, msg);
});

app.on('restifyError', (req, res, route, err) => {
  let msg = {"error" : "restifyError"}  
  res.send(500, msg);
});

app.on('NotFound', (req, res, route, err) => {
  let msg = {"error" : "EndPoint_NOT_Found"}  
  res.send(404, msg);
});


const server = app.listen("3000", () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
