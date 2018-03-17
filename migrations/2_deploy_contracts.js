var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
var Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
var Authentication = artifacts.require("./Authentication.sol");
var Dwifi = artifacts.require("./Dwifi.sol");
var EIP20Interface = artifacts.require("./EIP20Interface.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Killable);
  deployer.deploy(Killable);
  deployer.link(Killable, Authentication);
  deployer.deploy(Dwifi, 10000, "angel-chain", 0, "ACN");
  deployer.deploy(EIP20Interface);
};
