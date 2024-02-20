const { ethers } = require('hardhat');

async function main() {
    const WETH9 = await ethers.getContractFactory("WETH9");
    const weth9 = await WETH9.deploy();
    await weth9.waitForDeployment();
    console.log("WETH9 deployed to:", weth9.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
