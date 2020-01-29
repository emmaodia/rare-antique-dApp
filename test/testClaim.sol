pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Claim.sol";

contract TestClaim {
    Claim claim = Claim(DeployedAddresses.Claim());

    uint expectedAntiqueId = 8;

    address expectedClaimant = address(this);

    function testUserCanClaimAntiqueItem() public {
    uint returnedId = claim.claim(expectedAntiqueId);

        Assert.equal(returnedId, expectedAntiqueId, "Claim of the expected Antique Item should match what is returned.");
    }

    function testGetAdopterAddressByAntiqueId() public {
        address claimants = claim.claimants(expectedAntiqueId);

        Assert.equal(claimants, expectedClaimant, "Owner of the expected Pet should be this contract.");
    }

    function testGetClaimantAddressByAntiqueItemIdInArray() public {
        address[16] memory claimants = claim.getClaimants();

        Assert.equal(claimants[expectedAntiqueId], expectedClaimant, "Owner of the expected Antique should be this contract.");
    }
}

