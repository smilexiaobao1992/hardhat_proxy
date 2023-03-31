const { ethers, upgrades } = require('hardhat');

async function main() {
  const MyContract = await ethers.getContractFactory('MyContract');
  const myContract = await upgrades.deployProxy(MyContract, [42], { initializer: 'initialize' });
  console.log('MyContract deployed to:', myContract.address);

  // 如果您希望设置代理管理员，可以使用以下代码
  const proxyAdmin = await upgrades.admin.getInstance();
  console.log('ProxyAdmin address:', proxyAdmin.address);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(myContract.address);
  console.log('Implementation deployed to:', implementationAddress);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
