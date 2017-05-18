import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<div className='home'>
        <div className='Aligner'>
          <div className='Aligner-item'>
            <img src='/img/rocky-logo.png' />
            <h1>ROCKY STACK</h1>
            <div className='menu'>
              <ul>
                <li><a href='http://rocky.codingphase.com' target='new'>Documentation</a></li>
                <li><a href='http://www.codingphase.com' target='new'>CodingPhase.Com</a></li>
              </ul>
            </div>
            <div className='version-num'>
              version 1.1.0
            </div>
            <br />
            <a className='github-button' href='https://github.com/codingphasedotcom/rocky' data-icon='octicon-star' data-style='mega' data-count-href='/codingphasedotcom/rocky/stargazers' data-count-api='/repos/codingphasedotcom/rocky#stargazers_count' data-count-aria-label='# stargazers on GitHub' aria-label='Star codingphasedotcom/rocky on GitHub'>Star</a>
          </div>
        </div>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
