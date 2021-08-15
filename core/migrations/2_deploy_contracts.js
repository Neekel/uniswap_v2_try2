const Factory = artifacts.require("UniswapV2Factory.sol");

module.exports = async function (deployer, network, addresses) {
    await deployer.deploy(Factory, addresses[0]);
};

