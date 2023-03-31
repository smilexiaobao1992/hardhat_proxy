# Hardhat Proxy

这个项目展示了如何使用Hardhat和OpenZeppelin的升级合约来部署并升级一个智能合约。

##目录结构

本项目包含以下目录和文件：

├── contracts # 智能合约源代码目录   
│ ├── MyContract.sol # 初始版本的智能合约   
│ └── MyContractV2.sol # 升级版本的智能合约  
├── node_modules # 项目依赖目录   
├── scripts # 部署和交互脚本目录  
│ ├── deploy.js # 部署初始版本合约的脚本  
│ ├── interact.js # 与初始版本合约进行交互的脚本  
│ ├── interactV2.js # 与升级版本合约进行交互的脚本  
│ └── upgrade.js # 升级合约的脚本  
├── test # 测试文件目录  
│ └── MyContract.js # 合约测试文件  
├── .env.example # 示例环境变量文件  
├── .gitignore # Git忽略规则文件  
├── hardhat.config.js # Hardhat配置文件  
├── package-lock.json # 锁定项目依赖的版本  
└── package.json # 定义项目依赖和脚本
## 安装依赖

在项目根目录下运行以下命令以安装依赖：

```bash
npm install
```
## 编译合约
要编译智能合约，请运行以下命令：
```bash
npx hardhat compile
```
## 部署合约
要部署初始版本的合约，请运行以下命令：
```bash
npx hardhat run scripts/deploy.js --network bsctestnet
```
确保将.env文件中的PRIVATE_KEY设置为您的私钥。
## 与合约交互
要与部署的合约进行交互，请运行以下命令：
```bash
npx hardhat run scripts/interact.js --network bsctestnet
```
确保将scripts/interact.js中的proxyAddress变量设置为您实际部署的代理合约地址。
## 升级合约
要升级合约，请运行以下命令：
```bash
npx hardhat run scripts/upgrade.js --network bsctestnet
```
确保将scripts/upgrade.js中的proxyAddress变量设置为您实际部署的代理合约地址。
## 与升级后的合约交互
要与升级后的合约进行交互，请运行以下命令：
```bash
npx hardhat run scripts/interactV2.js --network bsctestnet
```
确保将scripts/interactV2.js中的proxyAddress变量设置为您实际部署的代理合约地址。
## 测试
要运行项目的测试，请执行以下命令：
```bash
npx hardhat test
```
