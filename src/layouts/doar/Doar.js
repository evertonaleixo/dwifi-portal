import React, { Component } from 'react'
import { connect } from 'react-redux'
import TruffleContract from 'truffle-contract'

const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará            ",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins"
];
const wallets = [
  "0xCc06d32dD07A3e5ABE549e3E01BF2D069a8c10cE",
  "0x354b9359cda774DabAf7c704A479a1bA2c551681",
  "0xdEA5b6DC8CCC0AF5BEAFAA613F388808D57f06b1",
  "0x1D410E013921C44bd76fa57C5F573fbA2a209135",
  "0x61954FaBE3B58f7A39047da22eAB119DB58834c0",
  "0x55b6C8a61549Ad9F6ce53766E2BeCCF13625B9bF",
  "0xd9010d1e2e46272953dA9Cd3215167C5A09a6b1C",
  "0xb3203c2D6273612b5A1d244674082f6f6fbB71B4",
  "0xe481C317c14631f53Ab234e57a50678107557E89",
  "0xB8624285484597576E21127Ec2Fe5c72def01e6D"
];

const pessoas = [
  {
    nome: "Antônio Paiva",
    foto: "/images/pessoa1.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
  {
    nome: "Caetana Paiva",
    foto: "/images/pessoa2.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
  {
    nome: "Deolindo Mundez",
    foto: "/images/pessoa3.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
  {
    nome: "Evangelista Silva",
    foto: "/images/pessoa4.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
  {
    nome: "Germana Pereira",
    foto: "/images/pessoa5.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
  {
    nome: "Luciana Pinhal",
    foto: "/images/pessoa6.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
  {
    nome: "Marilda Lucena",
    foto: "/images/pessoa7.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
  {
    nome: "Miguelina Afonso",
    foto: "/images/pessoa8.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
  {
    nome: "Rafael Jesus",
    foto: "/images/pessoa9.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
  {
    nome: "Salomão Silva",
    foto: "/images/pessoa10.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição."
  },
];

const seed = ["galaxy", "off", "later", "right", "lounge", "witness", "obvious", "traffic", "camp", "cry", "submit", "creek"]

const imgStyle = {
  width: "200px"
};

class Doar extends Component {

  handleDonate() {
    let { web3 } = this.props

    if(this.state==null || this.state.pessoa == null) {
      alert("Voce precisa selecionar uma pessoa.");
    } else {
      console.log("Enviando dados para a blockchain com Web3...")
    }

    if(web3 !== null) {
      web3.eth.getAccounts(console.log);
      let data = {
        "contractName": "Dwifi",
        "abi": [
          {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "name": "balances",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "name": "",
                "type": "uint8"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "address"
              },
              {
                "name": "",
                "type": "address"
              }
            ],
            "name": "transactions",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "address"
              },
              {
                "name": "",
                "type": "address"
              }
            ],
            "name": "allowed",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "name": "_initialAmount",
                "type": "uint256"
              },
              {
                "name": "_tokenName",
                "type": "string"
              },
              {
                "name": "_decimalUnits",
                "type": "uint8"
              },
              {
                "name": "_tokenSymbol",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_to",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_owner",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_spender",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_to",
                "type": "address"
              },
              {
                "name": "_value",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "name": "success",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_from",
                "type": "address"
              },
              {
                "name": "_to",
                "type": "address"
              },
              {
                "name": "_value",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "name": "success",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "name": "balance",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_spender",
                "type": "address"
              },
              {
                "name": "_value",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "name": "success",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              },
              {
                "name": "_spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "name": "remaining",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          }
        ],
        "bytecode": "0x6060604052655af3107a4000600155341561001957600080fd5b604051610ee5380380610ee58339810160405280805190602001909190805182019190602001805190602001909190805182019190505083600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008190555082600590805190602001906100b19291906100ed565b5081600660006101000a81548160ff021916908360ff16021790555080600790805190602001906100e39291906100ed565b5050505050610192565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012e57805160ff191683800117855561015c565b8280016001018555821561015c579182015b8281111561015b578251825591602001919060010190610140565b5b509050610169919061016d565b5090565b61018f91905b8082111561018b576000816000905550600101610173565b5090565b90565b610d44806101a16000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461017b578063095ea7b31461020957806318160ddd1461026357806323b872dd1461028c57806327e235e314610305578063313ce567146103525780633f05fffa146103815780635c658165146103ed57806370a082311461045957806395d89b41146104a6578063a9059cbb14610534578063dd62ed3e1461058e575b6000600154348115156100c957fe5b04905080600080828254019250508190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350005b341561018657600080fd5b61018e6105fa565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ce5780820151818401526020810190506101b3565b50505050905090810190601f1680156101fb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561021457600080fd5b610249600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610698565b604051808215151515815260200191505060405180910390f35b341561026e57600080fd5b61027661078a565b6040518082815260200191505060405180910390f35b341561029757600080fd5b6102eb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610790565b604051808215151515815260200191505060405180910390f35b341561031057600080fd5b61033c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a2a565b6040518082815260200191505060405180910390f35b341561035d57600080fd5b610365610a42565b604051808260ff1660ff16815260200191505060405180910390f35b341561038c57600080fd5b6103d7600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a55565b6040518082815260200191505060405180910390f35b34156103f857600080fd5b610443600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a7a565b6040518082815260200191505060405180910390f35b341561046457600080fd5b610490600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a9f565b6040518082815260200191505060405180910390f35b34156104b157600080fd5b6104b9610ae8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f95780820151818401526020810190506104de565b50505050905090810190601f1680156105265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053f57600080fd5b610574600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610b86565b604051808215151515815260200191505060405180910390f35b341561059957600080fd5b6105e4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c91565b6040518082815260200191505060405180910390f35b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106905780601f1061066557610100808354040283529160200191610690565b820191906000526020600020905b81548152906001019060200180831161067357829003601f168201915b505050505081565b600081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156108615750828110155b151561086c57600080fd5b82600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156109b95782600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a360019150509392505050565b60026020528060005260406000206000915090505481565b600660009054906101000a900460ff1681565b6004602052816000526040600020602052806000526040600020600091509150505481565b6003602052816000526040600020602052806000526040600020600091509150505481565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b7e5780601f10610b5357610100808354040283529160200191610b7e565b820191906000526020600020905b815481529060010190602001808311610b6157829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a7230582000c836a95711ab47085b312853a0bd41822f28739262e06148bb120dd7531d1e0029",
        "deployedBytecode": "0x6060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461017b578063095ea7b31461020957806318160ddd1461026357806323b872dd1461028c57806327e235e314610305578063313ce567146103525780633f05fffa146103815780635c658165146103ed57806370a082311461045957806395d89b41146104a6578063a9059cbb14610534578063dd62ed3e1461058e575b6000600154348115156100c957fe5b04905080600080828254019250508190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350005b341561018657600080fd5b61018e6105fa565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ce5780820151818401526020810190506101b3565b50505050905090810190601f1680156101fb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561021457600080fd5b610249600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610698565b604051808215151515815260200191505060405180910390f35b341561026e57600080fd5b61027661078a565b6040518082815260200191505060405180910390f35b341561029757600080fd5b6102eb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610790565b604051808215151515815260200191505060405180910390f35b341561031057600080fd5b61033c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a2a565b6040518082815260200191505060405180910390f35b341561035d57600080fd5b610365610a42565b604051808260ff1660ff16815260200191505060405180910390f35b341561038c57600080fd5b6103d7600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a55565b6040518082815260200191505060405180910390f35b34156103f857600080fd5b610443600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a7a565b6040518082815260200191505060405180910390f35b341561046457600080fd5b610490600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a9f565b6040518082815260200191505060405180910390f35b34156104b157600080fd5b6104b9610ae8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f95780820151818401526020810190506104de565b50505050905090810190601f1680156105265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053f57600080fd5b610574600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610b86565b604051808215151515815260200191505060405180910390f35b341561059957600080fd5b6105e4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c91565b6040518082815260200191505060405180910390f35b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106905780601f1061066557610100808354040283529160200191610690565b820191906000526020600020905b81548152906001019060200180831161067357829003601f168201915b505050505081565b600081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156108615750828110155b151561086c57600080fd5b82600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156109b95782600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a360019150509392505050565b60026020528060005260406000206000915090505481565b600660009054906101000a900460ff1681565b6004602052816000526040600020602052806000526040600020600091509150505481565b6003602052816000526040600020602052806000526040600020600091509150505481565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b7e5780601f10610b5357610100808354040283529160200191610b7e565b820191906000526020600020905b815481529060010190602001808311610b6157829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a7230582000c836a95711ab47085b312853a0bd41822f28739262e06148bb120dd7531d1e0029",
        "sourceMap": "58:2908:0:-;;;111:12;99:24;;745:643;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;928:14;905:8;:20;914:10;905:20;;;;;;;;;;;;;;;:37;;;;1019:14;1005:11;:28;;;;1096:10;1089:4;:17;;;;;;;;;;;;:::i;:::-;;1198:13;1187:8;;:24;;;;;;;;;;;;;;;;;;1300:12;1291:6;:21;;;;;;;;;;;;:::i;:::-;;745:643;;;;58:2908;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
        "deployedSourceMap": "58:2908:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2808:11;2832:5;;2822:9;:15;;;;;;;;2808:29;;2863:6;2848:11;;:21;;;;;;;;;;;2901:6;2879:8;:20;2888:10;2879:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;2937:10;2926:29;;2935:1;2926:29;2948:6;2926:29;;;;;;;;;;;;;;;;;;2773:189;58:2908;667:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2411:205:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;636:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1834:452:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;185:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;691:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;305:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;235:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2292:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;718:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1394:272:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2622:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;667:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2411:205::-;2478:12;2534:6;2502:7;:19;2510:10;2502:19;;;;;;;;;;;;;;;:29;2522:8;2502:29;;;;;;;;;;;;;;;:38;;;;2571:8;2550:38;;2559:10;2550:38;;;2581:6;2550:38;;;;;;;;;;;;;;;;;;2605:4;2598:11;;2411:205;;;;:::o;636:26:1:-;;;;:::o;1834:452:0:-;1916:12;1940:17;1960:7;:14;1968:5;1960:14;;;;;;;;;;;;;;;:26;1975:10;1960:26;;;;;;;;;;;;;;;;1940:46;;2023:6;2004:8;:15;2013:5;2004:15;;;;;;;;;;;;;;;;:25;;:48;;;;;2046:6;2033:9;:19;;2004:48;1996:57;;;;;;;;2080:6;2063:8;:13;2072:3;2063:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;2115:6;2096:8;:15;2105:5;2096:15;;;;;;;;;;;;;;;;:25;;;;;;;;;;;169:10;2135:9;:23;2131:90;;;2204:6;2174:7;:14;2182:5;2174:14;;;;;;;;;;;;;;;:26;2189:10;2174:26;;;;;;;;;;;;;;;;:36;;;;;;;;;;;2131:90;2246:3;2230:28;;2239:5;2230:28;;;2251:6;2230:28;;;;;;;;;;;;;;;;;;2275:4;2268:11;;1834:452;;;;;;:::o;185:44::-;;;;;;;;;;;;;;;;;:::o;691:21::-;;;;;;;;;;;;;:::o;305:69::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;235:64::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2292:113::-;2348:15;2382:8;:16;2391:6;2382:16;;;;;;;;;;;;;;;;2375:23;;2292:113;;;:::o;718:20::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1394:272::-;1457:12;1556:6;1532:8;:20;1541:10;1532:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;1589:6;1572:8;:13;1581:3;1572:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;1626:3;1605:33;;1614:10;1605:33;;;1631:6;1605:33;;;;;;;;;;;;;;;;;;1655:4;1648:11;;1394:272;;;;:::o;2622:142::-;2696:17;2732:7;:15;2740:6;2732:15;;;;;;;;;;;;;;;:25;2748:8;2732:25;;;;;;;;;;;;;;;;2725:32;;2622:142;;;;:::o",
        "source": "pragma solidity ^0.4.2;\n\nimport \"./EIP20Interface.sol\";\n\n\ncontract Dwifi is EIP20Interface {\n\n\n    uint price =0.0001 ether;\n\n    uint256 constant private MAX_UINT256 = 2**256 - 1;\n    mapping (address => uint256) public balances;\n    mapping (address => mapping (address => uint256)) public allowed;\n    mapping (address => mapping (address => uint256)) public transactions;\n    /*\n    NOTE:\n    The following variables are OPTIONAL vanities. One does not have to include them.\n    They allow one to customise the token contract & in no way influences the core functionality.\n    Some wallets/interfaces might not even bother to look at this information.\n    */\n    string public name;\n    uint8 public decimals;\n    string public symbol;\n\n    function Dwifi     (\n        uint256 _initialAmount,\n        string _tokenName,\n        uint8 _decimalUnits,\n        string _tokenSymbol\n    ) public {\n        balances[msg.sender] = _initialAmount;               // Give the creator all initial tokens\n        totalSupply = _initialAmount;                        // Update total supply\n        name = _tokenName;                                   // Set the name for display purposes\n        decimals = _decimalUnits;                            // Amount of decimals for display purposes\n        symbol = _tokenSymbol;                               // Set the symbol for display purposes\n    }\n\n    function transfer(address _to, uint256 _value) public returns (bool success) {\n        //require(balances[msg.sender] >= _value);\n        balances[msg.sender] -= _value;\n        balances[_to] += _value;\n        Transfer(msg.sender, _to, _value);\n        return true;\n    }\n\n    // function getTransactions(address addr) public view returns (mapping (address => uint256) transactionss) {\n\n    //     return transactions[addr];\n    // }\n\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {\n        uint256 allowance = allowed[_from][msg.sender];\n        require(balances[_from] >= _value && allowance >= _value);\n        balances[_to] += _value;\n        balances[_from] -= _value;\n        if (allowance < MAX_UINT256) {\n            allowed[_from][msg.sender] -= _value;\n        }\n        Transfer(_from, _to, _value);\n        return true;\n    }\n\n    function balanceOf(address _owner) public view returns (uint256 balance) {\n        return balances[_owner];\n    }\n\n    function approve(address _spender, uint256 _value) public returns (bool success) {\n        allowed[msg.sender][_spender] = _value;\n        Approval(msg.sender, _spender, _value);\n        return true;\n    }\n\n    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {\n        return allowed[_owner][_spender];\n    }   \n\n    function() public payable{\n        uint toMint = msg.value/price; \n        totalSupply += toMint;\n        balances[msg.sender]+=toMint;\n        \n        Transfer(0,msg.sender,toMint);\n    }\n\n\n}",
        "sourcePath": "/home/everton/hackthon/dwifi-auth/contracts/Dwifi.sol",
        "ast": {
          "absolutePath": "/home/everton/hackthon/dwifi-auth/contracts/Dwifi.sol",
          "exportedSymbols": {
            "Dwifi": [
              256
            ]
          },
          "id": 257,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 1,
              "literals": [
                "solidity",
                "^",
                "0.4",
                ".2"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:23:0"
            },
            {
              "absolutePath": "/home/everton/hackthon/dwifi-auth/contracts/EIP20Interface.sol",
              "file": "./EIP20Interface.sol",
              "id": 2,
              "nodeType": "ImportDirective",
              "scope": 257,
              "sourceUnit": 323,
              "src": "25:30:0",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "baseContracts": [
                {
                  "arguments": [],
                  "baseName": {
                    "contractScope": null,
                    "id": 3,
                    "name": "EIP20Interface",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 322,
                    "src": "76:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_EIP20Interface_$322",
                      "typeString": "contract EIP20Interface"
                    }
                  },
                  "id": 4,
                  "nodeType": "InheritanceSpecifier",
                  "src": "76:14:0"
                }
              ],
              "contractDependencies": [
                322
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "id": 256,
              "linearizedBaseContracts": [
                256,
                322
              ],
              "name": "Dwifi",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "price",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "99:24:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "99:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "302e30303031",
                    "id": 6,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "111:12:0",
                    "subdenomination": "ether",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_100000000000000_by_1",
                      "typeString": "int_const 100000000000000"
                    },
                    "value": "0.0001"
                  },
                  "visibility": "internal"
                },
                {
                  "constant": true,
                  "id": 14,
                  "name": "MAX_UINT256",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "130:49:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "130:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                      "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639935"
                    },
                    "id": 13,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                        "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639936"
                      },
                      "id": 11,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 9,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "169:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "**",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "323536",
                        "id": 10,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "172:3:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_256_by_1",
                          "typeString": "int_const 256"
                        },
                        "value": "256"
                      },
                      "src": "169:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                        "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639936"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 12,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "178:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "169:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                      "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639935"
                    }
                  },
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 18,
                  "name": "balances",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "185:44:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "typeName": {
                    "id": 17,
                    "keyType": {
                      "id": 15,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "194:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "185:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 16,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "205:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 24,
                  "name": "allowed",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "235:64:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                    "typeString": "mapping(address => mapping(address => uint256))"
                  },
                  "typeName": {
                    "id": 23,
                    "keyType": {
                      "id": 19,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "244:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "235:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                      "typeString": "mapping(address => mapping(address => uint256))"
                    },
                    "valueType": {
                      "id": 22,
                      "keyType": {
                        "id": 20,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "264:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Mapping",
                      "src": "255:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      },
                      "valueType": {
                        "id": 21,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "275:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 30,
                  "name": "transactions",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "305:69:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                    "typeString": "mapping(address => mapping(address => uint256))"
                  },
                  "typeName": {
                    "id": 29,
                    "keyType": {
                      "id": 25,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "314:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "305:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                      "typeString": "mapping(address => mapping(address => uint256))"
                    },
                    "valueType": {
                      "id": 28,
                      "keyType": {
                        "id": 26,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "334:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Mapping",
                      "src": "325:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      },
                      "valueType": {
                        "id": 27,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "345:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 32,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "667:18:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string storage ref"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "667:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 34,
                  "name": "decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "691:21:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "691:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 36,
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "718:20:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string storage ref"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "718:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 70,
                    "nodeType": "Block",
                    "src": "895:493:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 52,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 47,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "905:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 50,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 48,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "914:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 49,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "914:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "905:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 51,
                            "name": "_initialAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38,
                            "src": "928:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "905:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 53,
                        "nodeType": "ExpressionStatement",
                        "src": "905:37:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 56,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 54,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 260,
                            "src": "1005:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 55,
                            "name": "_initialAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38,
                            "src": "1019:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1005:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 57,
                        "nodeType": "ExpressionStatement",
                        "src": "1005:28:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 60,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 58,
                            "name": "name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "1089:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 59,
                            "name": "_tokenName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40,
                            "src": "1096:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "1089:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 61,
                        "nodeType": "ExpressionStatement",
                        "src": "1089:17:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 64,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 62,
                            "name": "decimals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "1187:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 63,
                            "name": "_decimalUnits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "1198:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1187:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "id": 65,
                        "nodeType": "ExpressionStatement",
                        "src": "1187:24:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 68,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 66,
                            "name": "symbol",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36,
                            "src": "1291:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "_tokenSymbol",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44,
                            "src": "1300:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "1291:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 69,
                        "nodeType": "ExpressionStatement",
                        "src": "1291:21:0"
                      }
                    ]
                  },
                  "id": 71,
                  "implemented": true,
                  "isConstructor": true,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "Dwifi",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 45,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 38,
                        "name": "_initialAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 71,
                        "src": "774:22:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 37,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "774:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 40,
                        "name": "_tokenName",
                        "nodeType": "VariableDeclaration",
                        "scope": 71,
                        "src": "806:17:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        "typeName": {
                          "id": 39,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "806:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string storage pointer"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 42,
                        "name": "_decimalUnits",
                        "nodeType": "VariableDeclaration",
                        "scope": 71,
                        "src": "833:19:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "typeName": {
                          "id": 41,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "833:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 44,
                        "name": "_tokenSymbol",
                        "nodeType": "VariableDeclaration",
                        "scope": 71,
                        "src": "862:19:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        "typeName": {
                          "id": 43,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "862:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string storage pointer"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "764:123:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 46,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "895:0:0"
                  },
                  "scope": 256,
                  "src": "745:643:0",
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 102,
                    "nodeType": "Block",
                    "src": "1471:195:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 80,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "1532:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 83,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 81,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "1541:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 82,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1541:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1532:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "1556:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1532:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 86,
                        "nodeType": "ExpressionStatement",
                        "src": "1532:30:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 91,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 87,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "1572:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 89,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 88,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "1581:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1572:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 90,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "1589:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1572:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92,
                        "nodeType": "ExpressionStatement",
                        "src": "1572:23:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 94,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "1614:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 95,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1614:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 96,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "1626:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 97,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 75,
                              "src": "1631:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 93,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 313,
                            "src": "1605:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 98,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1605:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 99,
                        "nodeType": "ExpressionStatement",
                        "src": "1605:33:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 100,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1655:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 79,
                        "id": 101,
                        "nodeType": "Return",
                        "src": "1648:11:0"
                      }
                    ]
                  },
                  "id": 103,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "transfer",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 76,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 73,
                        "name": "_to",
                        "nodeType": "VariableDeclaration",
                        "scope": 103,
                        "src": "1412:11:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 72,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1412:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 75,
                        "name": "_value",
                        "nodeType": "VariableDeclaration",
                        "scope": 103,
                        "src": "1425:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 74,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1425:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1411:29:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 79,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 78,
                        "name": "success",
                        "nodeType": "VariableDeclaration",
                        "scope": 103,
                        "src": "1457:12:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 77,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "1457:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1456:14:0"
                  },
                  "scope": 256,
                  "src": "1394:272:0",
                  "stateMutability": "nonpayable",
                  "superFunction": 276,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 169,
                    "nodeType": "Block",
                    "src": "1930:356:0",
                    "statements": [
                      {
                        "assignments": [
                          115
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 115,
                            "name": "allowance",
                            "nodeType": "VariableDeclaration",
                            "scope": 170,
                            "src": "1940:17:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 114,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "1940:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 122,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 116,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24,
                              "src": "1960:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 118,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 105,
                              "src": "1968:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1960:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 121,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 119,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 334,
                              "src": "1975:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 120,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1975:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1960:26:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1940:46:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 132,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 128,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 124,
                                    "name": "balances",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18,
                                    "src": "2004:8:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 126,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 125,
                                    "name": "_from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 105,
                                    "src": "2013:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2004:15:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 127,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "2023:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2004:25:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 131,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 129,
                                  "name": "allowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 115,
                                  "src": "2033:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 130,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "2046:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2033:19:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "2004:48:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 123,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "1996:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1996:57:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 134,
                        "nodeType": "ExpressionStatement",
                        "src": "1996:57:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 135,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "2063:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 137,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 136,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 107,
                              "src": "2072:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2063:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 138,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 109,
                            "src": "2080:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2063:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 140,
                        "nodeType": "ExpressionStatement",
                        "src": "2063:23:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 141,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "2096:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 143,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 142,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 105,
                              "src": "2105:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2096:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 144,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 109,
                            "src": "2115:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2096:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 146,
                        "nodeType": "ExpressionStatement",
                        "src": "2096:25:0"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 149,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 147,
                            "name": "allowance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 115,
                            "src": "2135:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 148,
                            "name": "MAX_UINT256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14,
                            "src": "2147:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2135:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 160,
                        "nodeType": "IfStatement",
                        "src": "2131:90:0",
                        "trueBody": {
                          "id": 159,
                          "nodeType": "Block",
                          "src": "2160:61:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 157,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 150,
                                      "name": "allowed",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24,
                                      "src": "2174:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(address => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 154,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 151,
                                      "name": "_from",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 105,
                                      "src": "2182:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2174:14:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 155,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 152,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 334,
                                      "src": "2189:3:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 153,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2189:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2174:26:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "-=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 156,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "2204:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2174:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 158,
                              "nodeType": "ExpressionStatement",
                              "src": "2174:36:0"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 162,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 105,
                              "src": "2239:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 163,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 107,
                              "src": "2246:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 164,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 109,
                              "src": "2251:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 161,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 313,
                            "src": "2230:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2230:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 166,
                        "nodeType": "ExpressionStatement",
                        "src": "2230:28:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 167,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2275:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 113,
                        "id": 168,
                        "nodeType": "Return",
                        "src": "2268:11:0"
                      }
                    ]
                  },
                  "id": 170,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "transferFrom",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 110,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 105,
                        "name": "_from",
                        "nodeType": "VariableDeclaration",
                        "scope": 170,
                        "src": "1856:13:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 104,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1856:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 107,
                        "name": "_to",
                        "nodeType": "VariableDeclaration",
                        "scope": 170,
                        "src": "1871:11:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 106,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1871:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 109,
                        "name": "_value",
                        "nodeType": "VariableDeclaration",
                        "scope": 170,
                        "src": "1884:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 108,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1884:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1855:44:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 113,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 112,
                        "name": "success",
                        "nodeType": "VariableDeclaration",
                        "scope": 170,
                        "src": "1916:12:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 111,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "1916:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1915:14:0"
                  },
                  "scope": 256,
                  "src": "1834:452:0",
                  "stateMutability": "nonpayable",
                  "superFunction": 287,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 181,
                    "nodeType": "Block",
                    "src": "2365:40:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 177,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "2382:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 179,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 178,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 172,
                            "src": "2391:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2382:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 176,
                        "id": 180,
                        "nodeType": "Return",
                        "src": "2375:23:0"
                      }
                    ]
                  },
                  "id": 182,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": true,
                  "modifiers": [],
                  "name": "balanceOf",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 173,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 172,
                        "name": "_owner",
                        "nodeType": "VariableDeclaration",
                        "scope": 182,
                        "src": "2311:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 171,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2311:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2310:16:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 176,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 175,
                        "name": "balance",
                        "nodeType": "VariableDeclaration",
                        "scope": 182,
                        "src": "2348:15:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 174,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2348:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2347:17:0"
                  },
                  "scope": 256,
                  "src": "2292:113:0",
                  "stateMutability": "view",
                  "superFunction": 267,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 209,
                    "nodeType": "Block",
                    "src": "2492:124:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 198,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 191,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24,
                                "src": "2502:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 195,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 192,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 334,
                                  "src": "2510:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 193,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2510:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2502:19:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 196,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 194,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 184,
                              "src": "2522:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2502:29:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 197,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "2534:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2502:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 199,
                        "nodeType": "ExpressionStatement",
                        "src": "2502:38:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 201,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "2559:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 202,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2559:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 203,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 184,
                              "src": "2571:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 204,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 186,
                              "src": "2581:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 200,
                            "name": "Approval",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 321,
                            "src": "2550:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2550:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 206,
                        "nodeType": "ExpressionStatement",
                        "src": "2550:38:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2605:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 190,
                        "id": 208,
                        "nodeType": "Return",
                        "src": "2598:11:0"
                      }
                    ]
                  },
                  "id": 210,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "approve",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 187,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 184,
                        "name": "_spender",
                        "nodeType": "VariableDeclaration",
                        "scope": 210,
                        "src": "2428:16:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 183,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2428:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 186,
                        "name": "_value",
                        "nodeType": "VariableDeclaration",
                        "scope": 210,
                        "src": "2446:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 185,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2446:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2427:34:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 190,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 189,
                        "name": "success",
                        "nodeType": "VariableDeclaration",
                        "scope": 210,
                        "src": "2478:12:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 188,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "2478:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2477:14:0"
                  },
                  "scope": 256,
                  "src": "2411:205:0",
                  "stateMutability": "nonpayable",
                  "superFunction": 296,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 225,
                    "nodeType": "Block",
                    "src": "2715:49:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 219,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24,
                              "src": "2732:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 221,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 220,
                              "name": "_owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 212,
                              "src": "2740:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2732:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 223,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 222,
                            "name": "_spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 214,
                            "src": "2748:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2732:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 218,
                        "id": 224,
                        "nodeType": "Return",
                        "src": "2725:32:0"
                      }
                    ]
                  },
                  "id": 226,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": true,
                  "modifiers": [],
                  "name": "allowance",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 215,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 212,
                        "name": "_owner",
                        "nodeType": "VariableDeclaration",
                        "scope": 226,
                        "src": "2641:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 211,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2641:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 214,
                        "name": "_spender",
                        "nodeType": "VariableDeclaration",
                        "scope": 226,
                        "src": "2657:16:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 213,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2657:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2640:34:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 218,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 217,
                        "name": "remaining",
                        "nodeType": "VariableDeclaration",
                        "scope": 226,
                        "src": "2696:17:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 216,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2696:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2695:19:0"
                  },
                  "scope": 256,
                  "src": "2622:142:0",
                  "stateMutability": "view",
                  "superFunction": 305,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 254,
                    "nodeType": "Block",
                    "src": "2798:164:0",
                    "statements": [
                      {
                        "assignments": [
                          230
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 230,
                            "name": "toMint",
                            "nodeType": "VariableDeclaration",
                            "scope": 255,
                            "src": "2808:11:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 229,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "2808:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 235,
                        "initialValue": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 234,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 231,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 334,
                              "src": "2822:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 232,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2822:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 233,
                            "name": "price",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "2832:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2822:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2808:29:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 236,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 260,
                            "src": "2848:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 237,
                            "name": "toMint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "2863:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2848:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 239,
                        "nodeType": "ExpressionStatement",
                        "src": "2848:21:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 245,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 240,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "2879:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 243,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 241,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "2888:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 242,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2888:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2879:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 244,
                            "name": "toMint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "2901:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2879:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 246,
                        "nodeType": "ExpressionStatement",
                        "src": "2879:28:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 248,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2935:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 249,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "2937:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 250,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2937:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 251,
                              "name": "toMint",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 230,
                              "src": "2948:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 247,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 313,
                            "src": "2926:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2926:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 253,
                        "nodeType": "ExpressionStatement",
                        "src": "2926:29:0"
                      }
                    ]
                  },
                  "id": 255,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 227,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "2781:2:0"
                  },
                  "payable": true,
                  "returnParameters": {
                    "id": 228,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "2798:0:0"
                  },
                  "scope": 256,
                  "src": "2773:189:0",
                  "stateMutability": "payable",
                  "superFunction": null,
                  "visibility": "public"
                }
              ],
              "scope": 257,
              "src": "58:2908:0"
            }
          ],
          "src": "0:2966:0"
        },
        "legacyAST": {
          "absolutePath": "/home/everton/hackthon/dwifi-auth/contracts/Dwifi.sol",
          "exportedSymbols": {
            "Dwifi": [
              256
            ]
          },
          "id": 257,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 1,
              "literals": [
                "solidity",
                "^",
                "0.4",
                ".2"
              ],
              "nodeType": "PragmaDirective",
              "src": "0:23:0"
            },
            {
              "absolutePath": "/home/everton/hackthon/dwifi-auth/contracts/EIP20Interface.sol",
              "file": "./EIP20Interface.sol",
              "id": 2,
              "nodeType": "ImportDirective",
              "scope": 257,
              "sourceUnit": 323,
              "src": "25:30:0",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "baseContracts": [
                {
                  "arguments": [],
                  "baseName": {
                    "contractScope": null,
                    "id": 3,
                    "name": "EIP20Interface",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 322,
                    "src": "76:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_EIP20Interface_$322",
                      "typeString": "contract EIP20Interface"
                    }
                  },
                  "id": 4,
                  "nodeType": "InheritanceSpecifier",
                  "src": "76:14:0"
                }
              ],
              "contractDependencies": [
                322
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "id": 256,
              "linearizedBaseContracts": [
                256,
                322
              ],
              "name": "Dwifi",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "constant": false,
                  "id": 7,
                  "name": "price",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "99:24:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "99:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "hexValue": "302e30303031",
                    "id": 6,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "111:12:0",
                    "subdenomination": "ether",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_100000000000000_by_1",
                      "typeString": "int_const 100000000000000"
                    },
                    "value": "0.0001"
                  },
                  "visibility": "internal"
                },
                {
                  "constant": true,
                  "id": 14,
                  "name": "MAX_UINT256",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "130:49:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "130:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                      "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639935"
                    },
                    "id": 13,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                        "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639936"
                      },
                      "id": 11,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 9,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "169:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "**",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "323536",
                        "id": 10,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "172:3:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_256_by_1",
                          "typeString": "int_const 256"
                        },
                        "value": "256"
                      },
                      "src": "169:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                        "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639936"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 12,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "178:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "169:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                      "typeString": "int_const 115792089237316195423570985008687907853269984665640564039457584007913129639935"
                    }
                  },
                  "visibility": "private"
                },
                {
                  "constant": false,
                  "id": 18,
                  "name": "balances",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "185:44:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "typeName": {
                    "id": 17,
                    "keyType": {
                      "id": 15,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "194:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "185:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                      "typeString": "mapping(address => uint256)"
                    },
                    "valueType": {
                      "id": 16,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "205:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 24,
                  "name": "allowed",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "235:64:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                    "typeString": "mapping(address => mapping(address => uint256))"
                  },
                  "typeName": {
                    "id": 23,
                    "keyType": {
                      "id": 19,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "244:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "235:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                      "typeString": "mapping(address => mapping(address => uint256))"
                    },
                    "valueType": {
                      "id": 22,
                      "keyType": {
                        "id": 20,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "264:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Mapping",
                      "src": "255:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      },
                      "valueType": {
                        "id": 21,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "275:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 30,
                  "name": "transactions",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "305:69:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                    "typeString": "mapping(address => mapping(address => uint256))"
                  },
                  "typeName": {
                    "id": 29,
                    "keyType": {
                      "id": 25,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "314:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "305:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                      "typeString": "mapping(address => mapping(address => uint256))"
                    },
                    "valueType": {
                      "id": 28,
                      "keyType": {
                        "id": 26,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "334:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Mapping",
                      "src": "325:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      },
                      "valueType": {
                        "id": 27,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "345:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 32,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "667:18:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string storage ref"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "667:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 34,
                  "name": "decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "691:21:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "691:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 36,
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 256,
                  "src": "718:20:0",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage",
                    "typeString": "string storage ref"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "718:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 70,
                    "nodeType": "Block",
                    "src": "895:493:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 52,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 47,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "905:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 50,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 48,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "914:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 49,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "914:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "905:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 51,
                            "name": "_initialAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38,
                            "src": "928:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "905:37:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 53,
                        "nodeType": "ExpressionStatement",
                        "src": "905:37:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 56,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 54,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 260,
                            "src": "1005:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 55,
                            "name": "_initialAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38,
                            "src": "1019:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1005:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 57,
                        "nodeType": "ExpressionStatement",
                        "src": "1005:28:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 60,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 58,
                            "name": "name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "1089:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 59,
                            "name": "_tokenName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40,
                            "src": "1096:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "1089:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 61,
                        "nodeType": "ExpressionStatement",
                        "src": "1089:17:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 64,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 62,
                            "name": "decimals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "1187:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 63,
                            "name": "_decimalUnits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "1198:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1187:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "id": 65,
                        "nodeType": "ExpressionStatement",
                        "src": "1187:24:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 68,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 66,
                            "name": "symbol",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36,
                            "src": "1291:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage",
                              "typeString": "string storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "_tokenSymbol",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44,
                            "src": "1300:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "src": "1291:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "id": 69,
                        "nodeType": "ExpressionStatement",
                        "src": "1291:21:0"
                      }
                    ]
                  },
                  "id": 71,
                  "implemented": true,
                  "isConstructor": true,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "Dwifi",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 45,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 38,
                        "name": "_initialAmount",
                        "nodeType": "VariableDeclaration",
                        "scope": 71,
                        "src": "774:22:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 37,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "774:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 40,
                        "name": "_tokenName",
                        "nodeType": "VariableDeclaration",
                        "scope": 71,
                        "src": "806:17:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        "typeName": {
                          "id": 39,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "806:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string storage pointer"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 42,
                        "name": "_decimalUnits",
                        "nodeType": "VariableDeclaration",
                        "scope": 71,
                        "src": "833:19:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "typeName": {
                          "id": 41,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "833:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 44,
                        "name": "_tokenSymbol",
                        "nodeType": "VariableDeclaration",
                        "scope": 71,
                        "src": "862:19:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        "typeName": {
                          "id": 43,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "862:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string storage pointer"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "764:123:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 46,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "895:0:0"
                  },
                  "scope": 256,
                  "src": "745:643:0",
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 102,
                    "nodeType": "Block",
                    "src": "1471:195:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 80,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "1532:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 83,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 81,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "1541:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 82,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1541:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1532:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "1556:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1532:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 86,
                        "nodeType": "ExpressionStatement",
                        "src": "1532:30:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 91,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 87,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "1572:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 89,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 88,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "1581:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1572:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 90,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "1589:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1572:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92,
                        "nodeType": "ExpressionStatement",
                        "src": "1572:23:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 94,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "1614:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 95,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1614:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 96,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 73,
                              "src": "1626:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 97,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 75,
                              "src": "1631:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 93,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 313,
                            "src": "1605:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 98,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1605:33:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 99,
                        "nodeType": "ExpressionStatement",
                        "src": "1605:33:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 100,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1655:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 79,
                        "id": 101,
                        "nodeType": "Return",
                        "src": "1648:11:0"
                      }
                    ]
                  },
                  "id": 103,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "transfer",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 76,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 73,
                        "name": "_to",
                        "nodeType": "VariableDeclaration",
                        "scope": 103,
                        "src": "1412:11:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 72,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1412:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 75,
                        "name": "_value",
                        "nodeType": "VariableDeclaration",
                        "scope": 103,
                        "src": "1425:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 74,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1425:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1411:29:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 79,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 78,
                        "name": "success",
                        "nodeType": "VariableDeclaration",
                        "scope": 103,
                        "src": "1457:12:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 77,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "1457:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1456:14:0"
                  },
                  "scope": 256,
                  "src": "1394:272:0",
                  "stateMutability": "nonpayable",
                  "superFunction": 276,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 169,
                    "nodeType": "Block",
                    "src": "1930:356:0",
                    "statements": [
                      {
                        "assignments": [
                          115
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 115,
                            "name": "allowance",
                            "nodeType": "VariableDeclaration",
                            "scope": 170,
                            "src": "1940:17:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 114,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "1940:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 122,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 116,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24,
                              "src": "1960:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 118,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 117,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 105,
                              "src": "1968:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1960:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 121,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 119,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 334,
                              "src": "1975:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 120,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1975:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1960:26:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1940:46:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 132,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 128,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 124,
                                    "name": "balances",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18,
                                    "src": "2004:8:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 126,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 125,
                                    "name": "_from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 105,
                                    "src": "2013:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2004:15:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 127,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "2023:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2004:25:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 131,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 129,
                                  "name": "allowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 115,
                                  "src": "2033:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 130,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "2046:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2033:19:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "2004:48:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 123,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 337,
                            "src": "1996:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1996:57:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 134,
                        "nodeType": "ExpressionStatement",
                        "src": "1996:57:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 135,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "2063:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 137,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 136,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 107,
                              "src": "2072:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2063:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 138,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 109,
                            "src": "2080:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2063:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 140,
                        "nodeType": "ExpressionStatement",
                        "src": "2063:23:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 141,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "2096:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 143,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 142,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 105,
                              "src": "2105:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2096:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 144,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 109,
                            "src": "2115:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2096:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 146,
                        "nodeType": "ExpressionStatement",
                        "src": "2096:25:0"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 149,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 147,
                            "name": "allowance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 115,
                            "src": "2135:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 148,
                            "name": "MAX_UINT256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14,
                            "src": "2147:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2135:23:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 160,
                        "nodeType": "IfStatement",
                        "src": "2131:90:0",
                        "trueBody": {
                          "id": 159,
                          "nodeType": "Block",
                          "src": "2160:61:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 157,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 150,
                                      "name": "allowed",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 24,
                                      "src": "2174:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                        "typeString": "mapping(address => mapping(address => uint256))"
                                      }
                                    },
                                    "id": 154,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 151,
                                      "name": "_from",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 105,
                                      "src": "2182:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "2174:14:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 155,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 152,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 334,
                                      "src": "2189:3:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 153,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2189:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2174:26:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "-=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 156,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 109,
                                  "src": "2204:6:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2174:36:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 158,
                              "nodeType": "ExpressionStatement",
                              "src": "2174:36:0"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 162,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 105,
                              "src": "2239:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 163,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 107,
                              "src": "2246:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 164,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 109,
                              "src": "2251:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 161,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 313,
                            "src": "2230:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2230:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 166,
                        "nodeType": "ExpressionStatement",
                        "src": "2230:28:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 167,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2275:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 113,
                        "id": 168,
                        "nodeType": "Return",
                        "src": "2268:11:0"
                      }
                    ]
                  },
                  "id": 170,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "transferFrom",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 110,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 105,
                        "name": "_from",
                        "nodeType": "VariableDeclaration",
                        "scope": 170,
                        "src": "1856:13:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 104,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1856:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 107,
                        "name": "_to",
                        "nodeType": "VariableDeclaration",
                        "scope": 170,
                        "src": "1871:11:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 106,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1871:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 109,
                        "name": "_value",
                        "nodeType": "VariableDeclaration",
                        "scope": 170,
                        "src": "1884:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 108,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1884:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1855:44:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 113,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 112,
                        "name": "success",
                        "nodeType": "VariableDeclaration",
                        "scope": 170,
                        "src": "1916:12:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 111,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "1916:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1915:14:0"
                  },
                  "scope": 256,
                  "src": "1834:452:0",
                  "stateMutability": "nonpayable",
                  "superFunction": 287,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 181,
                    "nodeType": "Block",
                    "src": "2365:40:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 177,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "2382:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 179,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 178,
                            "name": "_owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 172,
                            "src": "2391:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2382:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 176,
                        "id": 180,
                        "nodeType": "Return",
                        "src": "2375:23:0"
                      }
                    ]
                  },
                  "id": 182,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": true,
                  "modifiers": [],
                  "name": "balanceOf",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 173,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 172,
                        "name": "_owner",
                        "nodeType": "VariableDeclaration",
                        "scope": 182,
                        "src": "2311:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 171,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2311:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2310:16:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 176,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 175,
                        "name": "balance",
                        "nodeType": "VariableDeclaration",
                        "scope": 182,
                        "src": "2348:15:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 174,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2348:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2347:17:0"
                  },
                  "scope": 256,
                  "src": "2292:113:0",
                  "stateMutability": "view",
                  "superFunction": 267,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 209,
                    "nodeType": "Block",
                    "src": "2492:124:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 198,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 191,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24,
                                "src": "2502:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 195,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 192,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 334,
                                  "src": "2510:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 193,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2510:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2502:19:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 196,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 194,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 184,
                              "src": "2522:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2502:29:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 197,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "2534:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2502:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 199,
                        "nodeType": "ExpressionStatement",
                        "src": "2502:38:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 201,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "2559:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 202,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2559:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 203,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 184,
                              "src": "2571:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 204,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 186,
                              "src": "2581:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 200,
                            "name": "Approval",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 321,
                            "src": "2550:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2550:38:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 206,
                        "nodeType": "ExpressionStatement",
                        "src": "2550:38:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2605:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 190,
                        "id": 208,
                        "nodeType": "Return",
                        "src": "2598:11:0"
                      }
                    ]
                  },
                  "id": 210,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "approve",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 187,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 184,
                        "name": "_spender",
                        "nodeType": "VariableDeclaration",
                        "scope": 210,
                        "src": "2428:16:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 183,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2428:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 186,
                        "name": "_value",
                        "nodeType": "VariableDeclaration",
                        "scope": 210,
                        "src": "2446:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 185,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2446:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2427:34:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 190,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 189,
                        "name": "success",
                        "nodeType": "VariableDeclaration",
                        "scope": 210,
                        "src": "2478:12:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 188,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "2478:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2477:14:0"
                  },
                  "scope": 256,
                  "src": "2411:205:0",
                  "stateMutability": "nonpayable",
                  "superFunction": 296,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 225,
                    "nodeType": "Block",
                    "src": "2715:49:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 219,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 24,
                              "src": "2732:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 221,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 220,
                              "name": "_owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 212,
                              "src": "2740:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2732:15:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 223,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 222,
                            "name": "_spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 214,
                            "src": "2748:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2732:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 218,
                        "id": 224,
                        "nodeType": "Return",
                        "src": "2725:32:0"
                      }
                    ]
                  },
                  "id": 226,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": true,
                  "modifiers": [],
                  "name": "allowance",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 215,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 212,
                        "name": "_owner",
                        "nodeType": "VariableDeclaration",
                        "scope": 226,
                        "src": "2641:14:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 211,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2641:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 214,
                        "name": "_spender",
                        "nodeType": "VariableDeclaration",
                        "scope": 226,
                        "src": "2657:16:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 213,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2657:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2640:34:0"
                  },
                  "payable": false,
                  "returnParameters": {
                    "id": 218,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 217,
                        "name": "remaining",
                        "nodeType": "VariableDeclaration",
                        "scope": 226,
                        "src": "2696:17:0",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 216,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2696:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2695:19:0"
                  },
                  "scope": 256,
                  "src": "2622:142:0",
                  "stateMutability": "view",
                  "superFunction": 305,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 254,
                    "nodeType": "Block",
                    "src": "2798:164:0",
                    "statements": [
                      {
                        "assignments": [
                          230
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 230,
                            "name": "toMint",
                            "nodeType": "VariableDeclaration",
                            "scope": 255,
                            "src": "2808:11:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 229,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "2808:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 235,
                        "initialValue": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 234,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 231,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 334,
                              "src": "2822:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 232,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2822:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 233,
                            "name": "price",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "2832:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2822:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2808:29:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 236,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 260,
                            "src": "2848:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 237,
                            "name": "toMint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "2863:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2848:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 239,
                        "nodeType": "ExpressionStatement",
                        "src": "2848:21:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 245,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 240,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "2879:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 243,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 241,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "2888:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 242,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2888:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2879:20:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 244,
                            "name": "toMint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 230,
                            "src": "2901:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2879:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 246,
                        "nodeType": "ExpressionStatement",
                        "src": "2879:28:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 248,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2935:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 249,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 334,
                                "src": "2937:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 250,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2937:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 251,
                              "name": "toMint",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 230,
                              "src": "2948:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 247,
                            "name": "Transfer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 313,
                            "src": "2926:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2926:29:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 253,
                        "nodeType": "ExpressionStatement",
                        "src": "2926:29:0"
                      }
                    ]
                  },
                  "id": 255,
                  "implemented": true,
                  "isConstructor": false,
                  "isDeclaredConst": false,
                  "modifiers": [],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 227,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "2781:2:0"
                  },
                  "payable": true,
                  "returnParameters": {
                    "id": 228,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "2798:0:0"
                  },
                  "scope": 256,
                  "src": "2773:189:0",
                  "stateMutability": "payable",
                  "superFunction": null,
                  "visibility": "public"
                }
              ],
              "scope": 257,
              "src": "58:2908:0"
            }
          ],
          "src": "0:2966:0"
        },
        "compiler": {
          "name": "solc",
          "version": "0.4.19+commit.c4cbbb05.Emscripten.clang"
        },
        "networks": {
          "4447": {
            "events": {},
            "links": {},
            "address": "0x1411cb266fced1587b0aa29e9d5a9ef3db64a9c5",
            "transactionHash": "0xbfe3152bca29c3e429a74498276719c3f82770584dcdd471519b09ac018d4105"
          }
        },
        "schemaVersion": "2.0.0",
        "updatedAt": "2018-03-18T12:17:13.868Z"
      };
     // fetch('Dwifi.json').then((data)=> {
        console.log(2, data);
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        var dwifi = data;
        let contract = TruffleContract(dwifi);
        contract.setProvider(web3.currentProvider);
        console.log(contract)

        this.setState({contract: contract});

        web3.eth.getAccounts(function(error, accounts) {
          if (error) {
              console.log(error);
          }

          var account = accounts[0];
          console.log(5,web3.eth.getBlockNumber(console.log));
          console.log(6, account);

          contract.deployed().then(function(instance) {
              let dwifiInstance = instance;
              console.log('dwifiInstance ', dwifiInstance.transfer.call)

              let resp = dwifiInstance.transfer(0xf17f52151ebef6c7334fad080c5704d77216b732 , 100, {from: account})
                .then((x) => console.log(x));
              // Execute adopt as a transaction by sending account
              console.log(resp)
              dwifiInstance.balanceOf.call(account).then((x) => console.log(11,x))
              dwifiInstance.balanceOf.call(0xf17f52151ebef6c7334fad080c5704d77216b732).then((x) => console.log(12,x))
              return resp;
          }).then(function(result) {
              console.log(result);
              return result;
          }).catch(function(err) {
              console.log(err.message);
          });
      });
      //});

    }
  }

  render() {
    let pessoasNome = ["Selecione", ...pessoas.map(x => x.nome)];
    let pessoa = null;

    if(this.state && this.state.pessoa  != null) {
      pessoa = this.state.pessoa;
    }

    return(
      <main className="container">

        <div className="form-group">
          <label for="valor">Quantos MB deseja doar:</label>
          
          <select className="form-control" id="quantidade">
            {['100 MB','500 MB','1000 MB'].map(quantidade => <option>{quantidade}</option>)}
          </select>
        </div>
        
        <div className="form-group">
          <label for="state">Estado:</label>
          <select className="form-control" id="state">
            {states.map(state => <option>{state}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label for="pessoa">Pessoa:</label>
          <select className="form-control" id="pessoa" onChange={(x) => {
              let nome = x.target.value;

              var p = pessoas.filter(x => x.nome == nome);
              if(p.length == 0)
                this.setState({pessoa: null});
              else
                this.setState({pessoa: p[0]});
            }
            }>
            {pessoasNome.map(pessoa => <option>{pessoa}</option>)}
          </select>
        </div>

        {pessoa ? 
        <div className="row"> 
          <div className="col-xs-3">
            <img style={imgStyle} src={pessoa.foto} />
          </div>
          <div className="col-xs-7 h3">
            <p> {pessoa.historia} </p>
          </div>
        </div>: <div />}
        
        
        <div className="form-group">
          <button className="btn btn-success" onClick={() => this.handleDonate()}> DOAR </button>
        </div>

      </main>
    )
  }
}

const mapStateToProps = state => ({
  web3: state.web3.web3Instance
})

export default connect(mapStateToProps)(Doar)
