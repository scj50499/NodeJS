const fs = require("fs");
 

const file = "demofile.txt";
 
// Error first callback
// function with two
// arguments error and data
const ErrorFirstCallback = (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log("Function successfully executed");
};
 

fs.readFile(file, ErrorFirstCallback);