import React, { Component } from 'react'

class Cadastro extends Component {
  render() {
    return(
      <main className="container">
        <div className="row">
          <div className="col-md-6">
            <label>Nome
              <input type="text"/>
            </label>
          </div>

          <div className="col-md-6">
            <label>Sobrenome
              <input type="text"/>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label>Idade
              <input type="text"/>
            </label>
          </div>

          <div className="col-md-6">
            <label>Número Telefone Vivo
              <input type="text"/>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label>Cidade
              <input type="text"/>
            </label>
          </div>

          <div className="col-md-6">
            <label>Estado
              <input type="text"/>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label>Renda Familiar
              <input type="text"/>
            </label>
          </div>

          <div className="col-md-6">
            <label>Profissão
              <input type="text"/>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1 col-md-offset-11">
            <button className="btn btn-primary">Cadastrar</button>
          </div>
        </div>

      </main>
    )
  }
}

export default Cadastro
