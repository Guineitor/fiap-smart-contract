const Token = artifacts.require("./Token.sol");
 
module.exports = function(deployer) {
  deployer.deploy(Token, "GUI-FIAP", "GUI", 18);
};