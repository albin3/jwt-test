'use strict';

const jwt = require('jsonwebtoken');
const cert = require('fs').readFileSync('./private.pem');
const pub = require('fs').readFileSync('./public.pem');

const token = jwt.sign({hello: 'world'}, {
  key: cert,
  passphrase: 'hello world',
  mutatePayload: true
}, {
  algorithm: 'RS256',
  expiresIn: '2 s',
});

const decoded = jwt.verify(token, pub, {
  algorithms: ['RS256']
});

console.log('token', token, decoded);

