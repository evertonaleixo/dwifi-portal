import React, { Component } from 'react'
import { connect } from 'react-redux'
import TruffleContract from 'truffle-contract'
import Usuarios from '../usuario/Usuarios'
import dataDwifi from '../../../build/contracts/Dwifi.json'

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
      let data = dataDwifi;
     
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

    }
  }

  render() {
    const { pessoas } = this.props
    let pessoasNome = ["Selecione", ...pessoas.map(x => x.nome)];
    let pessoa = null;

    if(this.state && this.state.pessoa  != null) {
      pessoa = this.state.pessoa;
    }

    return(
      <main className="container">

        <div className="row">
          <div className="">
            <div className="col-xs-4">
              <label>Quantos MB deseja doar:</label>
              
              <select className="form-control" id="quantidade">
                {['100 MB','500 MB','1000 MB'].map(quantidade => <option>{quantidade}</option>)}
              </select>
            </div>
          </div>
          
          <div className="">
            <div className="col-xs-4">
              <label>Estado:</label>
              <select className="form-control" id="state">
                {states.map(state => <option>{state}</option>)}
              </select>
            </div>
          </div>
          <div className="">
            <div className="col-xs-4">
              <label>Pessoa:</label>
              <select className="form-control" id="pessoa" onChange={(x) => {
                  let nome = x.target.value;
                  let p = pessoas.filter(x => x.nome === nome);
                  if(p.length == 0)
                    this.setState({pessoa: null});
                  else
                    this.setState({pessoa: p[0]});
                }}>
                {pessoasNome.map(pessoa => <option>{pessoa}</option>)}
              </select>
            </div>
          </div>
        </div>

        <br/>

        <Usuarios></Usuarios>
        
        <div className="row">
          <button className="btn btn-success" onClick={() => this.handleDonate()}> DOAR </button>
        </div>

      </main>
    )
  }
}

const mapStateToProps = state => ({
  web3: state.web3.web3Instance,
  pessoas: state.usuarioReducer.pessoas
})

export default connect(mapStateToProps)(Doar)
