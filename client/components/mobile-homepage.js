import React, {Component} from 'react'

import {Card} from 'semantic-ui-react'

class MobileHome extends Component {
  constructor() {
    super()
    this.images = [
      'http://oceanpowerwashing.com/wp-content/uploads/2015/03/ocean21.jpg',
      'https://www.miraclemaintenance.com/wp-content/uploads/2016/06/pressure-washing-phoenix-flagstaff-driveway-power-washing-1550x567.jpg',
      'https://i.ytimg.com/vi/-m_27_0nWKY/maxresdefault.jpg',
      'http://windowworkshomeservices.com/wp-content/uploads/2014/04/pressure-washing-brick-walkway-2.jpg'
    ]
    this.imageCounter = 0
    this.state = {
      image: this.images[1],
      imageState: 'fade-in'
    }
  }

  componentDidMount = () => {
    setInterval(this.changeImage, 6000)
    setInterval(this.fadeImages, 6000)
  }
  changeImage = () => {
    this.imageCounter++
    if (this.imageCounter > this.images.length - 1) {
      this.imageCounter = 0
    }
    this.setState({
      image: this.images[this.imageCounter]
    })
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

  render() {
    return (
      <div className="homepage">
        <h1 id="mobile-title">Home</h1>
        {/* <p>____________________________________________________</p> */}
        <div id="mobile-column">
          <div className="mobile-carousel">
            <img
              src={window.location.origin + '/assets/pw1.jpg'}
              id={this.state.imageState}
            />
          </div>
          <div className="mobile-customer-updates">
            <div id="title-text">
              <h3>Updates to Note This Season</h3>
            </div>
            <ul>
              <div id="update-container">
                <div id="mobile-update-text">
                  <li>Standard Prices per Square Foot has been lowered %10.</li>
                </div>
                <div id="mobile-update-text">
                  <li>
                    Special Promotions added for returning customers and
                    referrals.
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="returning-container">
          <div className="mobile-returning-customer" id="left">
            <Card
              fluid
              header="Returning Customer?"
              description="Save 10% when using this service again"
            />
          </div>
          <div className="mobile-returning-customer" id="right">
            <a>
              <Card
                fluid
                header="Satisfied with our work?"
                description="Spread the word!"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileHome
