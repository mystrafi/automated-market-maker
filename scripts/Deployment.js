const { ethers } = require('hardhat');

async function main() {
    const Factory = await ethers.getContractFactory("UniswapV3Factory");
    const factory = await Factory.deploy();
    await factory.waitForDeployment();
    console.log("UniswapV3Factory deployed to:", factory.target);
    const NFTDescriptor = await ethers.getContractFactory("NFTDescriptor")
    const nftDescriptor = await NFTDescriptor.deploy();
    await nftDescriptor.waitForDeployment();
    const NonfungibleTokenPositionDescriptor = await ethers.getContractFactory(
        "NonfungibleTokenPositionDescriptor", {
        libraries: {
            NFTDescriptor: nftDescriptor.target,
        }
    });
    const WETH9 = "0x4200000000000000000000000000000000000006";
    const WETH32 = "0x4554480000000000000000000000000000000000000000000000000000000000";
    const nonfungibleTokenPositionDescriptor = await NonfungibleTokenPositionDescriptor.deploy(WETH9, WETH32);
    await nonfungibleTokenPositionDescriptor.waitForDeployment();
    console.log("NonfungibleTokenPositionDescriptor deployed to:", nonfungibleTokenPositionDescriptor.target);
    const NonfungiblePositionManager = await ethers.getContractFactory("NonfungiblePositionManager");
    const nonfungiblePositionManager = await NonfungiblePositionManager.deploy(factory.target, WETH9, nonfungibleTokenPositionDescriptor.target);
    await nonfungiblePositionManager.waitForDeployment();
    console.log("NonfungiblePositionManager deployed to:", nonfungiblePositionManager.target);
    const QuoterV2 = await ethers.getContractFactory("QuoterV2");
    const quoterV2 = await QuoterV2.deploy(factory.target, WETH9);
    await quoterV2.waitForDeployment();
    console.log("QuoterV2 deployed to:", quoterV2.target);
    const SwapRouter = await ethers.getContractFactory("SwapRouter");
    const swapRouter = await SwapRouter.deploy(factory.target, WETH9);
    await swapRouter.waitForDeployment();
    console.log("SwapRouter deployed to:", swapRouter.target);
    const Multicall2 = await ethers.getContractFactory("Multicall2");
    const multicall2 = await Multicall2.deploy();
    await multicall2.waitForDeployment();
    console.log("Multicall2 deployed to:", multicall2.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
