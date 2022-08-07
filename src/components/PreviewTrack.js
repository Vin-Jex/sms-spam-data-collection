import React from 'react'
import PropTypes from 'prop-types'
import { FaTimesCircle } from 'react-icons/fa'
function PreviewTrack({ text, onReset }) {
  return (
    <div className='preview-container'>
      <div className="row">
        <h4>Please confirm message before tracking!</h4>
        <button
          className='btn-clear flex-center'
          onClick={onReset} >
            <FaTimesCircle color='rgb(194, 57, 42)' size={20} />
        </button>
      </div>
      <div className="content">
          <h2>{text}</h2>
      </div>
    </div>
  )
}

PreviewTrack.propTypes = {
  text: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

export default PreviewTrack