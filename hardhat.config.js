require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();
const { PRIVATE_KEY, API_KEY } = process.env;

module.exports = {
    solidity: {
        compilers: [{
            version: '0.7.6',
            settings: {
                evmVersion: 'istanbul',
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
                metadata: {
                    bytecodeHash: 'none',
                },
            },
        },
        {
            version: '0.4.23',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                }
            },
        }
        ]
    },
    networks: {
        hardhat: {
            forking: {
                url: `https://rpc.ankr.com/eth_sepolia`,
                blockNumber: 5510709
            }
        },
        sepolia: {
            url: `https://rpc.ankr.com/eth_sepolia`,
            accounts: [PRIVATE_KEY]
        },
        mode: {
            url: "https://1rpc.io/mode",
            accounts: [PRIVATE_KEY]
        }
    },
    etherscan: {
        apiKey: API_KEY
    }
};
