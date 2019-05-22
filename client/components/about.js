import React, {Component} from 'react'
import MobileAbout from './mobile-about'

class About extends Component {
  constructor() {
    super()
    this.state = {
      isMobile: false,
      width: window.innerWidth
    }
  }
  componentDidMount = () => {
    this.handleWindowSizeChange()

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
  render() {
    return (
      <div>
        {!this.state.isMobile ? (
          <div className="about">
            <h1 id="title-ab">
              <img src="/assets/about.png" />
            </h1>

            <h2 id="about-content">
              Customer satisfaction, competitive pricing, and promptness have
              been the basis of my pressure washing service ever since I began
              it as a summer job while in high school during 2016. With these
              values backing my service, it gained traction on my neighborhood’s
              Nextdoor.com social network and left positive reviews. Currently a
              college student, I now have three years worth of experience and I
              am taking Yanni’s Pressure Washing to the next level, expanding
              services to Chicago and Northern suburbs with the help of our
              team. Our goal is to be the most dependable pressure washers in
              our area in quality of work and timeliness.
            </h2>
            <img
              src={window.location.origin + '/assets/signature-site.png'}
              id="signature"
            />
            <h1 id="text-sig">Yanni Kardaris</h1>
            <h1 id="text-sig">Owner</h1>
          </div>
        ) : (
          <MobileAbout />
        )}
      </div>
    )
  }
}

export default About
