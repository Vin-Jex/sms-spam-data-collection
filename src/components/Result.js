import React, { Component } from 'react'
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import PropTypes from 'prop-types'

const style = {
  header: {
    color: 'red',
  },
  text: {

   }
}

export default class Result extends Component {
  render() {
    return (
      <div className='container center'>
        <div className='card width'>
          <h2 className='text-align center capitalize'>
            This Message Provided below leads to <span style={style.header}> * </span></h2>
          <div className='suspect-info center flex space-between'>
            <span className='flex margin-right-md'>
              <FaUser size={20} />
              <p className='font-md'>John Doe</p>
            </span>
            <span className='flex margin-right-md'>
              <FaMapMarkerAlt size={20} />
              <p className='font-md'>Lagos, Nigeria</p>
            </span>
          </div>
          <div className="message font-md margin-topBottom-sm">
            {this.props.text}
          </div>
        </div>

        <button
          className='btn btn-dark btn-space'
          onClick={this.props.onReset}>
            More Track
        </button>
      </div>
    )
  }
}

Result.propTypes = {
  text: PropTypes.string.isRequired,
  onRest: PropTypes.func.isRequired
}