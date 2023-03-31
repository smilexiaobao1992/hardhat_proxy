// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract MyContract is Initializable, OwnableUpgradeable{
    uint256 public value;

    function initialize(uint256 _value) public initializer {
        __Ownable_init(); // 添加这一行初始化 OwnableUpgradeable
        value = _value;

         // 设置代理合约为 owner
        transferOwnership(msg.sender);
    }

    function setValue(uint256 _value) public onlyOwner{
        value = _value;
    }
}