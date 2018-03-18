import React, { Component } from 'react'
import { Link } from 'react-router'

class BackToHome extends Component {
  
  render() {
    return(
      <main className="container">
        <Link to="/cadastro">
          <button className="btn btn-primary">Voltar</button>
        </Link>
      <main/>
    )
  }
}

export default BackToHome
