/*
 * Deploy ERC20 token.
 */

const MyCoin = artifacts.require("MyCoin");
const accountIndex = 0


module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    MyCoin,
    {
      "from": accounts[accountIndex]
    }
  );
};

