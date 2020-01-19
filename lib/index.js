const crypto = require('crypto');

const iterations =  12000;
const saltlen =  32;
const keylen =  512;
const digest =  'sha1';

module.exports = (salt, password, done) => {
  crypto.randomBytes(saltlen, function (err, buf) {
    if (err) {
      return done(err);
    }

    var salt = buf.toString('hex');

    crypto.pbkdf2(password, salt, iterations, keylen, digest, function (err, hashRaw) {
      if (err) {
        return done(err);
      }
      done(null, new Buffer(hashRaw, 'binary').toString('hex'));
    });
  });
};


