require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;
const PRIVATE_KEY3 = process.env.PRIVATE_KEY3;
const ENDPOINT_URL = process.env.ENDPOINT_URL;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
      version: "0.8.17",
      settings: {
          optimizer: {
              enabled: false,
              runs: 200,
          },
      },
  },
  networks: {
      hardhat: {
          allowUnlimitedContractSize: true
      },
      sepolia: {
          url: ENDPOINT_URL,
          accounts: [`0x${PRIVATE_KEY}`,
          `0x${PRIVATE_KEY2}`,
          `0x${PRIVATE_KEY3}`],
      },
      goerli: {
          url: ENDPOINT_URL,
          accounts: [`0x${PRIVATE_KEY}`,
          `0x${PRIVATE_KEY2}`,
          `0x${PRIVATE_KEY3}`],
      },
      mainnet: {
          url: "https://mainnet.infura.io/v3/35f5ce3a8e9d4169a937431712cd6620",
          accounts: [`0x${PRIVATE_KEY}`],
      }
  },
  etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
      enabled: true,
      currency: "USD",
      gasPrice: 21,
  },
  mocha: {
      timeout: 10000000000
  },
};
