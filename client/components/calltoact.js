import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class CallToAct extends Component {
  render() {
    return (
      <div id="calltoact">
        <Link to="/contact" id="call-button">
          Request A Quote
        </Link>

        <img
          id="call-image"
          src={window.location.origin + '/assets/exteriorwall.png'}
        />
      </div>
    )
  }
}

export default CallToAct
