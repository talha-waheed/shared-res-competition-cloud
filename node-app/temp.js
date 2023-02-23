'use strict';

const os = require('os');

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

const doBusyWait = (durationMs) => {
  // console.log(durationMs);
  const startTime = Date.now()
  while (Date.now() < startTime + durationMs) {}
}

// mySlowFunction(process.argv.slice(2)[0], 8);

doBusyWait(process.argv.slice(2)[0]*100)