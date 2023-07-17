const SpotNFT = artifacts.require('SpotNFT');


module.exports = async (deployer, network, accounts) => {
    deployer.deploy(SpotNFT);
};
