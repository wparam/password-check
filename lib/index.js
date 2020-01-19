const crypto = require('crypto');
const bcrypt = require('bcrypt');

exports.withcrypto = (password, done) => {
  const iterations =  12000;
  const saltlen =  32;
  const keylen =  512;
  const digest =  'sha1'; 
  crypto.randomBytes(saltlen, function (err, buf) {
    if (err) {
      return done(err);
    }

    var salt = buf.toString('hex');

    crypto.pbkdf2(password, salt, iterations, keylen, digest, function (err, hashRaw) {
      if (err) {
        return done(err);
      }
      done(null, {password: new Buffer(hashRaw, 'binary').toString('hex'), salt: salt });
    });
  });
};


exports.withbcrypt = (password, done) => {
  const saltRounds = 10;

  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(password, salt);
  done(null, {
    password: hash,
    salt: salt
  });
};

