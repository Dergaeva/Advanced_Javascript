const header = require('./modules/header/header.js')();
const content = require('./modules/content/content.js')();
const footer = require('./modules/footer/footer.js')();
const $ = require('jquery');
console.log($('div'));

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

console.log($('div'));