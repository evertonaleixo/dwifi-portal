import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Bem vindo ao D-wifi!</h1>
            <p>A D-wifi é ferramenta que vai lhe permitir viajar constantemente sem se preocupar com a falta de infra estrutura para internet.</p>

            <p>Para começar a navegar, acesse <b>login</b> e insira sua wallet. </p>

            <p>Será debitado de sua wallet uma taxa de k Ethers para cada M Mb utilizado. </p>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
