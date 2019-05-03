import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'
import {sendFunc} from '../store/email'
import {connect} from 'react-redux'

class MobileContact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      sqft: '',
      email: '',
      message: '',
      address: '',
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
  handleChange = async evt => {
    await this.setState({[evt.target.name]: evt.target.value})
    console.log(this.state)
  }
  handleSubmit = evt => {
    this.props.sendEmail(this.state)
  }
  render() {
    return (
      <div id="centered">
        <div className="mobile-contact">
          <h1>Request a Quote</h1>
          <p>____________________________________</p>

          <Form onSubmit={this.handleSubmit}>
            <Form.Field id="email-message">
              <label>Name</label>
              <input
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Field>
            {/* <Form.Field id="email-message">
            <label>Sq Ft of Lot</label>
            <input
              placeholder="e.g. 500 sq ft"
              name="sqft"
              value={this.state.sqft}
              onChange={this.handleChange}
            />
          </Form.Field> */}
            <Form.Field id="email-message">
              <label>Email</label>
              <input
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field id="email-message">
              <label>Job Address</label>
              <input
                placeholder="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field id="email-message">
              <label>Job Details</label>
              <textarea
                placeholder="What would you like for us to clean? We do patios, decks, exterior walls, side walks, brick, siding, concrete, and more!"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Field>
            <br />
            <Button inverted type="submit" id="button-font">
              Submit
            </Button>
          </Form>
        </div>

        <h1>We will get back to you via email shortly to schedule a quote.</h1>
      </div>
    )
  }
}
const mapDispatch = dispatch => {
  return {
    sendEmail: emailObj => dispatch(sendFunc(emailObj))
  }
}
export default connect(null, mapDispatch)(MobileContact)
