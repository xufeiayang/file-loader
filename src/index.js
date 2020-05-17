
let src = require('./loader.jpg');
console.log(src);
let img = document.createElement('img');
img.src = src.default;
document.body.appendChild(img);

