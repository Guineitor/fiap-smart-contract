const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKeyRopsten = ["ec7375a5acff4776af2c76a0d1a7bf8a"];
const providerRopsten = new HDWalletProvider(privateKeyRopsten, 'https://ropsten.infura.io/v3/02871c5364c2443786d0a6a2848f8643')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ropsten: {
      network_id: 3, // official id of the ropsten network
      gasPrice: 4000000000, //(wei = 4 gwei) Default is 100000000000 (100 Shannon/gwei)
      gas: 4600000, //Default is 4712388
      provider: providerRopsten
    }
  }
};