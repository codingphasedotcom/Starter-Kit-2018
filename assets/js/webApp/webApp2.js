import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import ContentArea from './components/ContentArea'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      age: 29
    }
  }
  render () {
    return (
      <div>
        <div className={'container'}>
          <Header />
          <ContentArea />
        </div>
      </div>)
  }
}

const app = document.getElementById('webAppRoot')

ReactDOM.render(<Layout />, app)
