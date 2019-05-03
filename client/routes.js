import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import Homepage from './components/homepage'
import About from './components/about'
import Quote from './components/quote'
import Contact from './components/contact'
import NavbarMobile from './components/navbar-mobile'
import Gallery from './components/gallery'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor() {
    super()
    this.state = {
      isMobile: false,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    this.props.loadInitialData()
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
    const {isLoggedIn} = this.props

    return (
      <div>
        {!this.state.isMobile ? (
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/quote" component={Quote} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />

            <Route component={Login} />
          </Switch>
        ) : (
          <Switch>
            {/* Routes placed here are available to all visitors */}
            {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */}
            <Route path="/home" component={Homepage} />
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/quote" component={Quote} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />

            <Route component={Login} />
          </Switch>
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
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
