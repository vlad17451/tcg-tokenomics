// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

// TODO import StarLightNFT.sol
import "./StarLightNFT.sol";

contract MarketPlace {
    
    address public starLightNFT;

    constructor(address initialStarLightNFT) {
        starLightNFT = initialStarLightNFT;
    }

    function buyNFT() public payable {
        
    }
}
