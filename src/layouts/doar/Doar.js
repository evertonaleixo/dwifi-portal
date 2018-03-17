import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      web3.eth.getAccounts(console.log)
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
