const passchecker = require('./lib/index.js');
passchecker('5dda80320799abe4606d5577653acc5faf767251fd7ad7ac4d6d896707010c32', 'test', (error, pd)=>{
  console.log(pd);
});