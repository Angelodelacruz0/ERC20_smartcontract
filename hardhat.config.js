require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/53cc131c5f59497e97554e1e36f1a470`,
      accounts: [`0x74bf6fb5c401c46e70baee98d05a27f10e220ddb66b84f9d196c1c8cbe5098a7`] // Clave privada de Metamask
    }
  }
};
