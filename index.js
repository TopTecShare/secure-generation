// const fs = require("fs");
// const wallet = require("ethereumjs-wallet").default;

// const pk = new Buffer.from(process.argv[2], "hex"); // replace by correct private key
// const account = wallet.fromPrivateKey(pk);
// const password = process.argv[3]; // will be required to unlock/sign after importing to a wallet like MyEtherWallet

// account.toV3(password).then((value) => {
//   const address = account.getAddress().toString("hex");
//   const file = `UTC--${new Date()
//     .toISOString()
//     .replace(/[:]/g, "-")}--${address}.json`;
//   fs.writeFileSync(file, JSON.stringify(value));
// });

const { generateMnemonic, EthHdWallet } = require("eth-hd-wallet");

const mnemonic = generateMnemonic();
// require("child_process").spawn("clip").stdin.end(mnemonic);

fs = require("fs");
fs.writeFile("secure.txt", mnemonic, function (err) {
  if (err) return console.log(err);
  console.log("Hello World > helloworld.txt");
});

// const wallet = EthHdWallet.fromMnemonic(generateMnemonic());

// // generate 5 addresses
// wallet.generateAddresses(5);
// // discard the last 2 (leaving just the first 3)
// console.log(wallet.discardAddresses(2));

// wallet.generateAddresses(2);
// wallet.generateAddresses(3);

// // get all addresses
// console.log(wallet.getAddresses());

// wallet.generateAddresses(2);
// wallet.generateAddresses(3);

// /*
// [
//   '0xd7c0cd9e7d2701c710d64fc492c7086679bdf7b4',
//   '0x1acfb961c5a8268eac8e09d6241a26cbeff42241',
//   '0xabc2bca51709b8615147352c62420f547a63a00c',
//   '0x26042cb13cc4140a281c0fcc7464074c5e9fd0b4',
//   '0x5d0d1a012a3ab2b3424c2023246d8c834bf599d9'
// ]
// */

// wallet.hasAddress("0x1efd1a012a3ab2b3424c2023246d8c834bf58723"); /* false */
// wallet.hasAddress("0x26042cb13cc4140a281c0fcc7464074c5e9fd0b4"); /* true */
