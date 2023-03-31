require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    bsctestnet: {
      url: `https://rpc.ankr.com/bsc_testnet_chapel/ecd51df5ca724b4b4efa1d57fda895879976a786dd68ddffacd9f74fcc2ce5fd`, // 这是 BSC 测试网的 URL
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 97, // BSC 测试网的链 ID
      gasPrice: 20000000000, // 设置 gas 价格
    },
  },
};
