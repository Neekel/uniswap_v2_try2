const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
	let weth;
	const FACTORY_ADDRESS = '0x25f9e5c9D33eAE0ac4666ce5E055F4C6E1ba4406';
  
    if(network === 'mainnet') {
        weth = await WETH.at('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2');
    } else {
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};