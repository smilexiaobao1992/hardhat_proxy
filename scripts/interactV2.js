// scripts/interact.js
const { ethers } = require('hardhat');

async function main() {
  // 替换为代理合约地址
  const proxyAddress = '0xC03Bb43431DE42D253Df8a99C0032F203930e878';

  // 获取新的逻辑合约（通过代理合约进行操作）
  const MyContractV2 = await ethers.getContractFactory('MyContractV2');
  const proxyContractV2 = MyContractV2.attach(proxyAddress);

  // 调用合约方法以更改状态
  const tx = await proxyContractV2.incrementValue(1);
  await tx.wait();

  // 输出结果或状态
  const updatedState = await proxyContractV2.value();
  console.log('Updated state:', updatedState);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
