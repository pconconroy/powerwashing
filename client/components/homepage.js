import React, {Component} from 'react'
import CallToAct from './calltoact'

import {Card} from 'semantic-ui-react'
import MobileHome from './mobile-homepage'
class Homepage extends Component {
  constructor() {
    super()
    this.images = [
      window.location.origin + '/assets/exteriorwall.png',
      window.location.origin + '/assets/homepagepw1.jpg',
      window.location.origin + '/assets/patio.jpg',
      window.location.origin + '/assets/homepagepw1.jpg'
    ]
    this.imageCounter = 0
    this.state = {
      image: this.images[1],
      imageState: 'fade-in',
      isMobile: false,
      width: window.innerWidth,
      renderCall: false
    }
  }
  componentDidMount = () => {
    this.handleWindowSizeChange()

    setInterval(this.changeImage, 6000)
    setInterval(this.fadeImages, 6000)
    window.addEventListener('resize', this.handleWindowSizeChange)
  }
  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth})
    if (this.state.width <= 1000) {
      this.setState({isMobile: true})
    } else if (this.state.width >= 1000) {
      this.setState({isMobile: false})
    }
  }
  changeImage = () => {
    this.imageCounter++

    if (this.imageCounter > this.images.length - 1) {
      this.imageCounter = 0
    }
    this.setState({
      image: this.images[this.imageCounter]
    })
    this.renderCall()
  }
  fadeImages = async () => {
    await this.setState({imageState: 'fade-in'})
    await setTimeout(() => {
      this.setState({imageState: 'normal-image'})
    }, 200)
    await setTimeout(() => {
      this.setState({imageState: 'fade-out'})
    }, 5600)
  }
  renderCall = () => {
    if (
      this.state.image ===
      window.location.origin + '/assets/exteriorwall.png'
    ) {
      this.setState({renderCall: true})
    } else {
      this.setState({renderCall: false})
    }
  }

  render() {
    return (
      <div>
        {!this.state.isMobile ? (
          <div className="homepage">
            <h1 id="title">
              <img src="/assets/homeyan.png" />
            </h1>
            {/* <p>____________________________________________________</p> */}
            <div id="row">
              <div className="placeholder placeholder-lefts">
                <img src="/assets/logo.png" />
              </div>
              <div className="my-carousel">
                {/* <img src={this.state.image} id={this.state.imageState} />
                <CallToAct /> */}
                <div id={this.state.imageState}>
                  {!this.state.renderCall ? (
                    <img src={this.state.image} id={this.state.imageState} />
                  ) : (
                    <CallToAct id={this.state.imageState} />
                  )}
                </div>
              </div>
              <div className="placeholder placeholder-right">
                <img src="/assets/logoflipped.png" />
              </div>
              {/* <div className="customer-updates">
                 <div id="title-text">
                  <h3>Updates to Note This Season</h3>
                </div>
                <ul>
                  <div id="update-container">
                    <div id="update-text">
                      <li>
                        Standard Prices per Square Foot has been lowered %10.
                      </li>
                    </div>
                    <div id="update-text">
                      <li>
                        Special Promotions added for returning customers and
                        referrals.
                      </li>
                    </div>
                  </div>
                </ul>
              </div> */}
            </div>
            <div className="returning-container">
              <div className="returning-customer">
                <Card
                  fluid
                  header="Returning Customer?"
                  meta="_________________"
                  description="Save 10% when using this service again"
                />
              </div>
              <div className="returning-customer">
                <a>
                  <Card
                    fluid
                    header="Satisfied with our work?"
                    meta="_________________"
                    description="Spread the word!"
                  />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <MobileHome />
        )}
      </div>
    )
  }
}

export default Homepage
