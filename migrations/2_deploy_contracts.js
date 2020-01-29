const Claim = artifacts.require("Claim");

module.exports = (deployer) => {
    deployer.deployer(Claim);
}