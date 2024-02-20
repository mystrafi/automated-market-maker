require("@nomicfoundation/hardhat-toolbox");
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
                url: `https://sepolia.blast.io`
            }
        },
        blast_sepolia: {
            url: `https://sepolia.blast.io`,
            accounts: [PRIVATE_KEY]
        }
    },
    etherscan: {
        apiKey: API_KEY
    }
};
