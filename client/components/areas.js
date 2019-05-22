import React, {Component} from 'react'
import MobileAreas from './mobile-areas'

class Areas extends Component {
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
            <h1 id="title-wash">
              <img src="/assets/washyan.png" />
            </h1>

            <h2 id="about-content">
              Driveways Patios
              <br />
              Decks
              <br />
              Walks
              <br />
              Porches
              <br />
              Fences
              <br />
              Soffits
              <br />
              Gutters
              <br />
              Landscaping walls
              <br />
              Exterior building walls-up to two stories tall
              <br />
              Exterior windowsills
              <br />
              Select outdoor furniture and flowerpots
              <br />
              Garage floors
              <br />
              and more!
            </h2>
          </div>
        ) : (
          <MobileAreas />
        )}
      </div>
      // <div className="about">
      //   <h1>Washable Areas</h1>
      //   <p>_________________________________________________________</p>
      //   <h2 id="about-content">
      //     Driveways <br /> Patios <br /> Decks <br />Walks <br />Porches Fences
      //     <br /> Soffits <br /> Gutters Landscaping walls <br /> Exterior
      //     building walls-up to two stories tall <br />Exterior windowsills
      //     <br />
      //     Select outdoor furniture <br /> flowerpots <br />Garage floors
      //     <br />and more!
      //   </h2>
      // </div>
    )
  }
}

export default Areas
