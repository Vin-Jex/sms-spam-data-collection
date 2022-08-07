import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  

  handleSubmit(e) {
    e.preventDefault()

    this.props.onSubmit(this.state.text)
  }
  
  render() {
    return (
        <div className="container">  
          <form action="#" className="form" onSubmit={this.handleSubmit}>
            <textarea 
              name="text" 
              id="text" 
              rows="3" 
              placeholder='Enter Spam to track'
              autoCapitalize='off'
              autoComplete='off'
              value={this.state.text}
              onChange={this.handleChange} >
          
          </textarea>
            <button
              type='submit'
              disabled={!this.state.text}
              className='btn btn-dark'
            >
              Confirm
            </button>
          </form>
        </div> 
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}