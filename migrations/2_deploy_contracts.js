const Claim = artifacts.require("./Claim.sol");

module.exports = (deployer) => {
    deployer.deploy(Claim);
}