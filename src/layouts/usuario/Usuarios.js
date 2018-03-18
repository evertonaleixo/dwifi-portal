import React, { Component } from 'react'
import { connect } from 'react-redux'
import TruffleContract from 'truffle-contract'
import store from '../../store'
import dataDwifi from '../../../build/contracts/Dwifi.json'

const userActive = {
  backgroundColor: "red"
}

class Usuarios extends Component {

  handleClick(person) {
    let n = confirm("Deseja confirmar a doação?")
    if(n) {
      console.log('sdasdas')
      this.handleDonate()
    }
  }

  handleDonate(wallet) {
    let { web3 } = this.props
    console.log("Enviando dados para a blockchain com Web3...")

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

            let resp = dwifiInstance.transfer(wallet , 1, {from: account})
              .then((x) => console.log(x));
            // Execute adopt as a transaction by sending account
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

  renderPeople(person, n) {
    return(
      <div className="col-md-3" key={n} >
        <div className="thumbnail" 
          onClick={() => this.handleClick(person)}
          style={person.active ? userActive : {}}>

          <img src={`/images/pessoa${n+1}.png`} className="img-thumbnail"/>
          <div className="caption">
            <span className="h3" style={{textAlign: "center"}}><b>{person.nome}</b></span>
          </div>
        </div>
      </div>
    )
    
  }
  
  render() {
    var { pessoas } = this.props

    return(
      <main className="container">
        <div className="row">
          {pessoas.map((v, i) => this.renderPeople(v, i))}
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  pessoas: state.usuarioReducer.pessoas,
  web3: state.web3.web3Instance
})

export default connect(mapStateToProps)(Usuarios)
