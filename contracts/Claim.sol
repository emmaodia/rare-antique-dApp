//This is the Contract where a User can lay claim to a rare antique

pragma solidity ^0.5.0;

contract Claim {
    address[16] public antiqueItems;
    
    //Claim an antique function
    function claim(uint antiqueId) public returns (uint) {
        require(antiqueId >= 0 && antiqueId <=15);

        antiqueItems[antiqueId] = msg.sender;

        return antiqueId;
    }

    //Get a list of the claim owners
    function getClaimOwner() view public returns(address[16] memory) {
        return antiqueItems;
    }
}