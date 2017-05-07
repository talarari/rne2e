require('./ignoreUnknownPropsError')
require('./node_modules/jest-enzyme/lib/index');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 60 * 1000;
const JSDOM = require('jsdom').JSDOM;                    
const dom = new JSDOM(``);
 global.document = dom.window.document;                         
 global.window = dom.window;
 Object.keys(document.defaultView).forEach((property) => {
   if (typeof global[property] === 'undefined') {         
     global[property] = document.defaultView[property];   
   }                                                      
 });      