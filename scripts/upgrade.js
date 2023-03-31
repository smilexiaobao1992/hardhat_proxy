// scripts/upgrade.js

const { ethers, upgrades } = require('hardhat');

async function main() {
  const proxyAddress = '0xC03Bb43431DE42D253Df8a99C0032F203930e878'; // 请将 YOUR_PROXY_ADDRESS 替换为实际的代理合约地址
  const MyContractV2 = await ethers.getContractFactory('MyContractV2');
  
  // 使用新的逻辑合约升级代理合约
  const upgraded = await upgrades.upgradeProxy(proxyAddress, MyContractV2);
  console.log('MyContract upgraded to:', upgraded.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
