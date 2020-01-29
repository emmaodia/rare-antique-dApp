pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Claim.sol";

contract TestClaim {
    Claim claim = Claim(DeployedAddresses.Claim());

    uint expectedPetId = 8;

    address expectedAdopter = address(this);

    function testUserCanClaimItem() public {
    uint returnedId = claim.claim(expectedPetId);

        Assert.equal(returnedId, expectedPetId, "Claim of the expected pet should match what is returned.");
    }

    function testGetAdopterAddressByPetId() public {
        address antiqueItem = claim.antiqueItems(expectedPetId);

        Assert.equal(antiqueItem, expectedAdopter, "Owner of the expected Pet should be this contract.");
    }

    function testGetAdopterAddressByPetIdInArray() public {
        address[16] memory antiqueItems = claim.getAdopters();

        Assert.equal(antiqueItems[expectedPetId], expectedAdopter, "Owner of the expected Pet should be this contract.");
    }
}

