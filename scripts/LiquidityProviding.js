const { ethers } = require('hardhat');

async function main() {
    const nonfungiblePositionManager = await ethers.getContractAt("NonfungiblePositionManager", "0x96d2DDB70E359529D50Fa9C0e6a0918BCe7C3B3B");
    const params = {
        // WETH -> POOL <- MERC20 (10000)
        "token0": "0x5b1C257B88537d1Ce2AF55a1760336288CcD28B6",
        "token1": "0xa8C93f239917172DF0Bfb3ED847Fd5F3Ad9bE7cF",
        "fee": 10000n,
        "tickLower": -200n,
        "tickUpper": 200n,
        "amount0Desired": 10000000000000000000000n,
        "amount1Desired": 10000000000000000000000n,
        "amount0Min": 0n,
        "amount1Min": 0n,
        "recipient": "0xb6c1a6393Ca3eE4aCa4B81112CAe61191D44cC34",
        "deadline": 999999999999999n
    }
    const tx = await nonfungiblePositionManager.mint(params);
    await tx.wait();
    console.log("Done!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
