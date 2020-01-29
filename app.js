const { withcrypto,  withbcrypt  } = require('./lib/index.js');
withcrypto('test', (error, pd)=>{
  console.log('-----------------------get crypt for : test----------------------------------')
  console.log(pd);
  console.log('-----------------------------------------------------------------------------');
});

//used in node 
withbcrypt('Electrifai@2020', (error, pd)=>{
  console.log('-----------------------get bcrypt for : Electrifai@2020----------------------------------')
  console.log(pd);
  console.log('-----------------------------------------------------------------------------------------')
});
