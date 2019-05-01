import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Button} from 'semantic-ui-react'

const NavbarMobile = ({handleClick, isLoggedIn}) => (
  <div className="centered-nav">
    <h1>Yanni's Powerwashing</h1>
    (
    <div className="centered-nav">
      {/* The navbar will show these links before you log in */}

      <Link to="/home">
        <Button inverted>Home</Button>
      </Link>
      <Link to="/about">
        <Button inverted>About</Button>
      </Link>

      <Link to="/reviews">
        <Button inverted>Reviews</Button>
      </Link>
      <Link to="/gallery">
        <Button inverted>Gallery</Button>
      </Link>
      <Link to="/contact">
        <Button inverted>Contact</Button>
      </Link>
    </div>
    <hr />
  </div>
)

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

export default connect(mapState, mapDispatch)(NavbarMobile)

/**
 * PROP TYPES
 */
NavbarMobile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
