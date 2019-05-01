import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'

class Quote extends Component {
  constructor() {
    super()
    this.state = {
      quote: 0,
      feet: 0
    }
  }
  handleChange = evt => {
    const quote = evt.target.value * 2
    this.setState({
      feet: evt.target.value,
      quote: quote
    })
  }
  render() {
    return (
      <div className="about">
        <h1>Quote</h1>
        <p>___________________________________</p>
        <div>
          <Form>
            {/* <Form.Field>
              <label>Name</label>
              <input placeholder="Name" />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email" />
            </Form.Field> */}
            <Form.Field>
              <label>Sq Ft of Lot</label>
              <input
                placeholder="e.g. 500 sq ft"
                value={this.state.feet}
                onChange={this.handleChange}
              />
            </Form.Field>
            {/* <Form.Field>
              <label>Name</label>
              <input placeholder="Name" />
            </Form.Field> */}
          </Form>
        </div>
        <div className="quote-view">
          <h1>You're quote is: ${this.state.quote}</h1>
        </div>
      </div>
    )
  }
}

export default Quote
