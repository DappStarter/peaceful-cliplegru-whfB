require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain horn harvest lock bone solution'; 
let testAccounts = [
"0x6fa4faadb309ad2112178b73e0c92891dd0ac6ab8b4eb9d6d9c598902fa46c45",
"0x131830f1d942d4da209a4b5226bc79b1efa844da7805fa3e3343cd12e55100bc",
"0x59fc566734c9730332cb657f0235b37b5ba34068f7613b5984dad356e0a9acd4",
"0xd24ce599cb514f0f0c3512f8afd44996018e27ea7b4a16c7a13e4660afc3e9cc",
"0x9644d2b00b99581f7ebf1a0d4e202261fbb7119895429ba766e87abf08367bce",
"0xd4cc0eaaea8a186c7a415eb1f49570c291c9a8f19822e6f696e75d56c78e1783",
"0x88322ef4fd871365f8ca022c2eda4e43d9eed6933fea63bbc44e93b21c1584ca",
"0x873b1e570d8295bad9b6a7df4107f8f8c21e3265e1cdd6ab78190d26dfe2be1f",
"0xdfdd8ef0beae3f868a7e067349a8f26fed956433a039ab315c72ee0d5adb1b35",
"0xff6fda9a13c6527967b857f6ba8c3fdce3cab961029cf1cfeb92c4696f5176ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

