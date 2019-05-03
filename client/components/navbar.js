import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Button} from 'semantic-ui-react'

class Navbar extends Component {
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
          <div className="centered-nav">
            <h1 id="title-nav">Yanni's Pressure Washing Service</h1>
            <nav>
              <div className="centered-nav">
                <Link to="/home">
                  <Button inverted id="button-font">
                    Home
                  </Button>
                </Link>
                <Link to="/about">
                  <Button inverted id="button-font">
                    About Us
                  </Button>
                </Link>

                {/* <Link to="/reviews">
                  <Button inverted id="button-font">
                    Reviews
                  </Button>
                </Link> */}
                <Link to="/gallery">
                  <Button inverted id="button-font">
                    Project Gallery
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button inverted id="button-font">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </nav>
            <hr />
          </div>
        ) : (
          <div className="mobile-container-nav">
            <h1>Yanni's Pressure Washing Service</h1>
            <nav>
              <div className="mobile-nav">
                {/* The navbar will show these links before you log in */}

                <Link id="mobile-button" to="/home">
                  <Button inverted id="mobile-butt">
                    Home
                  </Button>
                </Link>
                <Link id="mobile-button" to="/about">
                  <Button inverted id="mobile-butt">
                    About
                  </Button>
                </Link>

                <Link id="mobile-button" to="/gallery">
                  <Button inverted id="mobile-butt">
                    Project Gallery
                  </Button>
                </Link>
                <Link id="mobile-button" to="/contact">
                  <Button textAlign="center" inverted id="mobile-butt">
                    Contact
                  </Button>
                </Link>
              </div>
            </nav>
            <hr />
          </div>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
