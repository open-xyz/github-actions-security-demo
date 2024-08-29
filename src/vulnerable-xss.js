const marked = require('marked');

const unsafeInput = "<img src='x' onerror='alert(1)'>";
const safeHTML = marked(unsafeInput);

console.log(safeHTML);  // This can render the XSS in a browser context
