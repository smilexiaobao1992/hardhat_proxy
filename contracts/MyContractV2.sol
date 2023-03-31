// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract MyContractV2 is Initializable, OwnableUpgradeable{
    uint256 public value;

    function initialize(uint256 _value) public initializer {
        __Ownable_init(); // 添加这一行初始化 OwnableUpgradeable
        value = _value;

         // 设置代理合约为 owner
        transferOwnership(msg.sender);
    }

    // 新增方法
    function incrementValue(uint256 _amount) public  {
        value += _amount;
    }

    // 修改现有方法
    function setValue(uint256 _value) public onlyOwner {
        require(_value >= 0, "Value must be greater than or equal to 0");
        value = _value;
    }
}