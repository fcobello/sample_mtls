var request = require('request');
var req = request.defaults();
var fs = require('fs');

req.get({
    uri : "https://client.badssl.com",
    key: fs.readFileSync("keys/badssl.com-client.pem"),//Chave Privada no formato PEM
    cert: fs.readFileSync("keys/badssl.com-client.pem"),//Certificado no formato PEM ou CRT
    //pfx: fs.readFileSync('keys/badssl.com-client.p12'),//Chaves no formato pfx ou p12
    passphrase: 'badssl.com',//Contem o password nos casos de chave estar encriptada
    rejectUnauthorized: false
  }, function(error, response, body) {
    console.log('StatusCode:', response.statusCode);
    console.log('Body:', body);
  }
);