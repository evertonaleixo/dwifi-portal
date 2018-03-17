import React, { Component } from 'react'
import { connect } from 'react-redux'

class Doar extends Component {

  componentDidMount() {
    let { web3 } = this.props
    web3.eth.getAccounts().then(console.log)
  }

  render() {
    return(
      <main className="container">
        Doar
      </main>
    )
  }
}

const mapStateToProps = state => ({
  web3: state
})

export default connect(mapStateToProps)(Doar)
