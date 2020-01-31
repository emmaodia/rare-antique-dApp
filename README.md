# Rare Antique Dapp

## Description

This is a dApp to demonstrate my learning of the Solidity Programming Language on Ethereum.
This application has been built as my final project for the [Consensys Developer Bootcamp](https://consensys.net/academy/bootcamp/)
It's composed of *several smart contracts and a Web UI for interacting with the smart contracts.
It is a simple dApp where users lay claim to a rare antique and can transfer ownership of such antique.

- There is a list of antiques
- Users lay claim to an antique and hold it
- *Users can transfer ownership of an antique

# Technical description

## Technologies
### Contracts 

 - Solidity 
 - Truffle 
 - Truffle tests
 - Javascript tests with web3

### Web application

 - BootStrap
 - Web3

### [Design Pattern decisions](https://github.com/emmaodia/rare-antique-dApp/blob/master/design_pattern_decisions.md)
### [Avoiding common attacks](https://github.com/emmaodia/rare-antique-dApp/blob/master/avoiding_common_attacks.md)

# Test it

## Prerequisites
### Installation

 - Install [NodeJS](https://nodejs.org/fr/download/)
 - Install [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation)
 - Install [GanacheCLI](https://github.com/trufflesuite/ganache-cli)
 - Install [VueCLI](https://cli.vuejs.org/guide/installation.html)
 - Install [Metamask](https://metamask.io/) on web browser
 - Clone project
 - cd `rare-antique-dApp` 
 - run: `npm install` 

## Tests

### Launch private blockchain with Ganache
    `$ ganache-cli`

### Launch tests
    `$ cd rare-antique-dApp`

    `$ truffle tests`
    
## Application

### Launch private blockchain with Ganache
    `$ ganache-cli`

    Copy private key of an account from the ganache-cli terminal.
    
### Deploy contracts 
    `$ cd rare-antique-dApp`
    `$ truffle compile`
    `$ truffle migrate`
    
    If error of type `not found compiled contract`, delete `/build/contract` folder

### Start application
    `$ cd rare-antique-dApp`
    `$ npm run dev`

### Connect to Metamask
 1. Open web brower 
 2. Create Metamask wallet or Import account
 3. If Import account: Paste private key of account  
 4. Connect with this account

### Go to application
Open Browser to `localhost:3000`

### License
This project is licensed under the Apache-2.0 License

# Author
[Emmanuel Oaikhenan](https://twitter.com/@emma_odia)

## Acknowledgements
[Consensys Academy](https://consensys.net/academy/)
[Papa Google](https://google.com)
[Stack Overflow](https://stackoverflow.com)
