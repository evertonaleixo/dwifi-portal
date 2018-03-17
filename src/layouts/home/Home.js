import React, { Component } from 'react'
import { Link } from 'react-router'

const btnStyle = {
  margin: '15px'
};

class Home extends Component {
  
  render() {
    

    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Bem vindo ao D-wifi!</h1>
            <p>A D-wifi é ferramenta que vai lhe permitir doar créditos para pessoas de baixa renda. Ajude a levar a internet para todos doando o que não gastar do seu!</p>
          </div>
        </div>
        
        <div style={{clear:'both'}} />
        <br />
        <div style={{float: 'left'}}>
          <button className="btn btn-default" style={btnStyle}>
            <Link to="/cadastro">Cadastar</Link>
          </button>
          <button className="btn btn-primary" style={btnStyle}>
            <Link to="/doar" style={{color: 'white'}}>Doar</Link>
          </button>
          <div style={{clear:'both'}} />
          <br />
          
          <div>
            {this.props.children}
          </div>
        </div>
      </main>
    )
  }
}

export default Home
