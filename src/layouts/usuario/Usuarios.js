import React, { Component } from 'react'
import { connect } from 'react-redux'

class Usuarios extends Component {

  handleClick(person) {
    console.log(person);
    this.setState()
  }

  renderPeople(person, n) {
    return(
      <div className="col-md-3" key={n} >
        <div className="thumbnail" onClick={() => this.handleClick(person)}>
          <img src={`/images/pessoa${n+1}.png`} className="img-thumbnail"/>
          <div className="caption">
            <span className="h3" style={{textAlign: "center"}}><b>{person.nome}</b></span>
          </div>
        </div>
      </div>
    )
    
  }
  
  render() {

    const { pessoas } = this.props;

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
  pessoas: state.usuarioReducer.pessoas
})

export default connect(mapStateToProps)(Usuarios)
