const { withcrypto,  withbcrypt  } = require('./lib/index.js');
withcrypto('test', (error, pd)=>{
  console.log(pd);
  console.log('-------------------');
});

withbcrypt('test', (error, pd)=>{
  console.log(pd);
});
