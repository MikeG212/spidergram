const path = require('path');
const path2 = "http://example.com/test1/test2/img/1.jpg";
const path3 = "http://example.com/test1/img/1.jpg";

const relativePath = path.relative(path.dirname(path2), path.dirname(path3));
console.log(relativePath); //'../../img'