const fs = require('fs');//in built module

/*
UTF-8 : UTF-8 is a variable-length character encoding used for electronic communication.
 Defined by the Unicode Standard, the name is derived from Unicode Transformation Format – 8-bit.

*/

fs.readFile('./demofile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});