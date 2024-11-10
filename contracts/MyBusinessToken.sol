// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyBusinessToken is ERC20 {
    address public owner;

    constructor(uint256 initialSupply) ERC20("MyBusinessToken", "MBT") {
        _mint(msg.sender, initialSupply);
        owner = msg.sender;
    }

    // Solo el propietario del contrato puede mintear nuevos tokens
    function mint(uint256 amount) external {
        require(msg.sender == owner, "Only owner can mint tokens");
        _mint(owner, amount);
    }
}
