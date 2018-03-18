import React, { Component } from 'react'
import { connect } from 'react-redux'

const userActive = {
  backgroundColor: "red"
}

class Usuarios extends Component {

  handleClick(person) {
    this.props.selected = person;
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
    var { pessoas } = this.state
    pessoas = pessoas || this.props.pessoas

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
