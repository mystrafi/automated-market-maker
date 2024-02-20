const { bytecode } = require("../artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json");
const { keccak256 } = require("@ethersproject/solidity");

async function main() {
    const POOL_INIT_CODE_HASH = keccak256(['bytes'], [bytecode]);
    console.log(POOL_INIT_CODE_HASH);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
