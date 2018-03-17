import React, { Component } from 'react'

const containerStyle = {
  marginTop: "30px"
}

class Cadastro extends Component {

  render() {
    return(
      <main className="container" style={containerStyle} >
        <br></br>
        <div className="row ">
          <div className="col-xs-6 form-group">
            <label>Nome </label>
              <input type="text" className="form-control"/>
          </div>

          <div className="col-xs-6 form-group">
            <label>Sobrenome </label>
              <input type="text" className="form-control"/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 form-group">
            <label>Idade </label>
              <input type="text" className="form-control"/>
          </div>

          <div className="col-xs-6 form-group">
            <label>Número Telefone Vivo </label>
              <input type="text" className="form-control"/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 form-group">
            <label>Cidade </label>
              <input type="text" className="form-control"/>
          </div>

          <div className="col-xs-6 form-group">
            <label>Estado</label>
              <input type="text" className="form-control"/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 form-group">
            <label>História </label>
              <textarea className="form-control" rows='10'/>
          </div>
        </div>

        <br/>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <button className="btn btn-primary">Cadastrar</button>
          </div>
        </div>
      </main>
    )
  }
}

export default Cadastro
