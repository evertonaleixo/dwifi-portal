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
            <h1>Bem vindo a Operadora Social!</h1>
            <p className="h4">A Operadora Social é uma ferramena desenvolvida com tecnologia Angelchain,
              onde qualquer pessoa consegue transformar seus dados de acesso a
              internet não utilizados, em doações</p>
          </div>
        </div>
        <div style={{clear:'both'}} />
        <br />
        <div style={{float: 'left'}}>
          <div className="row">
            <div className="col-xs-6">
              <Link to="/cadastro">
                <div className="thumbnail">
                  <img src="/images/senior.jpg" className="img-thumbnail"/>
                  <div className="caption">
                    <span className="h3" style={{textAlign: "center"}}><b>Cadastrar-se</b></span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xs-6">
              <Link to="/doar" style={{color: 'white'}}>
                <div className="thumbnail">
                  <img src="/images/donate.jpg" className="img-thumbnail"/>
                  <div className="caption">
                    <span className="h3" style={{textAlign: "center"}}><b>Doar</b></span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div style={{clear:'both'}} />
          <br />
        </div>
      </main>
    )
  }
}

export default Home
