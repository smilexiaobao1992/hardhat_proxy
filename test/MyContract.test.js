const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("MyContract", function () {
  it("Should set the right value", async function () {
    const MyContract = await ethers.getContractFactory("MyContract");

    // 部署逻辑合约
    const myContractLogic = await MyContract.deploy();
    await myContractLogic.deployed();
    console.log("MyContract Logic deployed to:", myContractLogic.address);

    // 部署并获取代理合约地址
    const myContractProxy = await upgrades.deployProxy(MyContract, [42]);
    console.log("MyContract Proxy deployed to:", myContractProxy.address);

    // 获取代理管理地址
    const proxyAdmin = await upgrades.admin.getInstance();
    console.log("Proxy Admin deployed to:", proxyAdmin.address);

    const value = await myContractProxy.value();
    expect(value).to.equal(42);

    await myContractProxy.setValue(7);
    const newValue = await myContractProxy.value();
    expect(newValue).to.equal(7);
  });
});
