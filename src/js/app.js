App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
    $.getJSON('../items.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].owner);
        petTemplate.find('.pet-breed').text(data[i].item);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    
    $.getJSON('Claim.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var ClaimArtifact = data;
      App.contracts.Claim = TruffleContract(ClaimArtifact);
    
      // Set the provider for our contract
      App.contracts.CLaim.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the adopted pets
      return App.markClaimed();
    });

      return App.bindEvents();
    },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleClaim);
  },

  markClaimed: function(claimants, account) {
    
    var claimInstance;

    App.contracts.Claim.deployed().then(function(instance) {
      claimInstance = instance;

      return claimInstance.getClaimants.call();
    }).then(function(claimants) {
      for (i = 0; i < adopters.length; i++) {
        if (claimants[i] !== '0x0000000000000000000000000000000000000000') {
          $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
        }
      }
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  handleClaim: function(event) {
    event.preventDefault();

    var antiqueId = parseInt($(event.target).data('id'));

    var claimInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.Adoption.deployed().then(function(instance) {
        claimInstance = instance;

        // Execute adopt as a transaction by sending account
        return claimInstance.adopt(antiqueId, {from: account});
      }).then(function(result) {
        return App.markClaimed();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
