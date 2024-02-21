const { ethers } = require('hardhat');

async function main() {
    const swapRouter = await ethers.getContractAt("SwapRouter", "0x40ceeAE9e8a218d2F0f70Cff2572d34fd903431f");
    const params = {
        // WETH -> MERC20 (100)
        "path": "0xa8c93f239917172df0bfb3ed847fd5f3ad9be7cf0027105b1c257b88537d1ce2af55a1760336288ccd28b6",
        "recipient": "0xb6c1a6393Ca3eE4aCa4B81112CAe61191D44cC34",
        "deadline": 9999999999n,
        "amountIn": 100000000000000000000n,
        "amountOutMinimum": 0n
    }
    /*const params = {
        // WETH -> MERC20 (100)
        "path": "0x5b1c257b88537d1ce2af55a1760336288ccd28b6002710a8c93f239917172df0bfb3ed847fd5f3ad9be7cf",
        "recipient": "0xb6c1a6393Ca3eE4aCa4B81112CAe61191D44cC34",
        "deadline": 9999999999n,
        "amountIn": 100000000000000000000n,
        "amountOutMinimum": 0n
    }*/
    const tx = await swapRouter.exactInput(params);
    await tx.wait();
    console.log("Done!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
