require('./node_modules/jest-enzyme/lib/index');

const JSDOM = require('jsdom').JSDOM;                    
const dom = new JSDOM(``);
 global.document = dom.window.document;                         
 global.window = dom.window;
 Object.keys(document.defaultView).forEach((property) => {
   if (typeof global[property] === 'undefined') {         
     global[property] = document.defaultView[property];   
   }                                                      
 });      