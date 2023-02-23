'use strict';

const express = require('express');
const os = require('os');
const { allowedNodeEnvironmentFlags } = require('process');

const app = express();

const PORT = 3000;
const HOST = 'localhost';

const mySlowFunction = (totalLoopCount, baseNumber) => {
  // console.log(totalLoopCount, baseNumber)
  // console.time('mySlowFunction');
  for (let loopCount = 0; loopCount < totalLoopCount; loopCount++) {
    let result = 0;
    for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
      result += Math.atan(i) * Math.tan(i);
    };
  }
  // console.timeEnd('mySlowFunction');
}

app.get("/:iter/:base", (req, res) => {
  const startTime = Date.now()
  mySlowFunction(req.params.iter, req.params.base); // higher number => more iterations => slower
  const endTime = Date.now()
  const responseMsg = `${startTime} ${endTime} ${os.hostname()}`
  // res.set("Connection", "close");
  res.status(200).send(responseMsg);
});



// app.get("/", (req, res) => {
//   const helloMessage = `VERSION 2: Hello from the ${os.hostname()}`
//   mySlowFunction(8); // higher number => more iterations => slower
//   res.send(helloMessage)
// })

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

// docker build . -t talhawaheed/webapp:4
// docker push talhawaheed/webapp:4