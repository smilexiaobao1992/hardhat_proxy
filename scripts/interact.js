const { ethers, upgrades } = require('hardhat');

async function main() {
    // 替换为代理合约地址
    const proxyAddress = '0xC03Bb43431DE42D253Df8a99C0032F203930e878';
  
    // 获取当前逻辑合约（通过代理合约进行操作）
    const MyContract = await ethers.getContractFactory('MyContract');
    const proxyContract = MyContract.attach(proxyAddress);
  
    // 调用合约方法以更改状态
    const newValue = 123; // 设置一个新的值
    const tx = await proxyContract.setValue(newValue);
    await tx.wait();
  
    // 输出结果或状态
    const updatedState = await proxyContract.value();
    console.log('Updated state:', updatedState);
  }
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });