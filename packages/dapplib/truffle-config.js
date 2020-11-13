require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain come harvest opera success suggest'; 
let testAccounts = [
"0x22bedd4bf0c1ada98588e8c9ec1128e582ec50c1f98a8ad6baf3a5136f54f27e",
"0x43a57cb3b25f74c6564c887e0490f994725d59c1641f0ad1b7e02009ca9d432a",
"0xc962b29407d76b774ac3c9bfbff9a9bc9a86d20a9c9d53904a8fef6e8d0f4278",
"0xd4b33519006d526e2ae612434de815197b5948557e97c0d92af9d6118e67d899",
"0x1eee77a60dc77d92a3f62d3c16ea609eb6682e115813e57aaf5c757bf9d014a5",
"0xd2febb64f823c828a199d0a3c6176499e68d394c615f7551c97ed0682ac4c73e",
"0x6e0c74bcf1d234437c63753207612797a1230ed502e5a4a1c1443b2f80138d9d",
"0x8b7b618588fad65975eb417547da51b84d0deed42a3eaad7353b6a8927620da4",
"0x41de0ad37b2a4003490032a2388a687e49ee90ca810a56e376ed0175573c46bb",
"0x2b24407e48951b7bbf7b0c87196267dea30f9ac8ff74c74b6409a3fbbe0b916b"
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
            version: '^0.5.11'
        }
    }
};
