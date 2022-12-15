var buffer1 = Buffer.alloc(100); //allocated a space of 100 units
//we can store the binary data inside this buffer
var buffer2 = new Buffer('FYND');
var buffer3 = Buffer.from([1, 2, 3, 4]);

//utilising a buffer space
buffer1.write("I am here!");
//transforming the buffer content to string
var a  = buffer1.toString('utf-8');
console.log(a);
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);

var bufferSrc = new Buffer('ABC');
var bufferDest = Buffer.alloc(3);

bufferSrc.copy(bufferDest); //copy the content of bufferSrc to bufferDest
var data = bufferDest.toString('utf-8');
console.log(data);

// Slicing data
var bufferOld = new Buffer('INDIA IS GREAT');
var bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());

// concatenate two buffer
var bufferOne = new Buffer('INDIA');
var bufferTwo = new Buffer(' IS GREAT');
var bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());