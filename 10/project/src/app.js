const header = require('./modules/header/header.js')();
const content = require('./modules/content/content.js')();
const footer = require('./modules/footer/footer.js')();

const $ = require('jquery');
const body = $('body');

body.append(header, content, footer);


