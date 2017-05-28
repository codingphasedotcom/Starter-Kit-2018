import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<div className='webAppRoot'>
        <div className="container">
          <header id="header">
            <div className="logo">
              Bape
            </div>
            <div className="menu">
              <nav>
                <a href="/lookbook.html">
                  Home
                </a>
                <a href="/lookbook.html">
                  Lookbook
                </a>
                <a href="/lookbook.html">
                  Mens
                </a>
                <a href="/lookbook.html">
                  Womens
                </a>
                <a href="/lookbook.html">
                  News
                </a>
              </nav>
            </div>
          </header>

          <section id="content-area">
            <div className="col-md-6 model">
              <img src="/img/bape2.png" alt="" />
            </div>
            <div className="col-md-6 info">
              <div className="insider">
                <h5>Mens</h5>
                <h1>JACKET DRIPPING SAUCE</h1>
                <p>Franzen williamsburg af, cornhole semiotics hammock meh raw denim blog cliche live-edge pickled. Four loko pok pok fingerstache truffaut. Mlkshk mumblecore pork belly bicycle rights. Pok pok cred cardigan, master cleanse migas pinterest umami ugh chia. Raw denim wayfarers shabby chic seitan, +1 dreamcatcher health goth paleo typewriter enamel pin copper mug. Neutra migas jianbing, tofu hammock vice fashion axe succulents deep v waistcoat activated charcoal helvetica try-hard microdosing. Raclette vape pok pok bitters plaid, kickstarter banjo bespoke.</p>
                <div className="size">
                  <div className="title">
                    size
                  </div>
                  <ul className="sizes">
                    <li className="circle">S</li>
                    <li className="circle">M</li>
                    <li className="circle">L</li>
                    <li className="semi-circle">XL</li>
                    <li className="semi-circle">XXL</li>
                    <li className="semi-circle">CUSTOM</li>
                  </ul>
                </div>
                <div className="action-btns">
                  <a className="col-md-6 red-hollow-btn">
                    <span className=" price">
                      $232
                    </span>
                    add to cart
                  </a>
                  <a className="col-md-6 lightgrey-btn">
                    find a store
                  </a>
                </div>

            </div>
            </div>
          </section>
        </div>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
