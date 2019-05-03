import React, {Component} from 'react'

class MobileAbout extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>_________________________________________________________</p>
        <h2 id="mobile-about-content">
          Customer satisfaction, competitive pricing, and promptness have been
          the basis of my pressure washing service ever since I began it as a
          summer job while in high school during 2016. With these values backing
          my service, it gained traction on my neighborhood’s Nextdoor.com
          social network and left positive reviews. Currently a college student,
          I now have three years worth of experience and I am taking Yanni’s
          Pressure Washing to the next level expanding services to Chicago and
          Northern suburbs .
        </h2>
        <img
          src={window.location.origin + '/assets/signature-site.png'}
          id="signature-mobile"
        />
        <h1 id="mobile-text-sig">Yanni Kardaris</h1>
        <h1 id="mobile-text-sig">Owner</h1>
      </div>
    )
  }
}

export default MobileAbout
