import React, { Component } from 'react'
import Form from './Form'
import PreviewTrack from './PreviewTrack'
import Result from './Result'

export default class Track extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       text: null,
       track: false
    }
    

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    }

    handleSubmit( text ) {
      this.setState({
        text: text
      })
    }
    handleReset(text) {
      this.setState({
        text: null
      })
    }

  render() {
    let { text, track } = this.state

    if(track === true) {
      return <Result text={text} onReset={() => this.handleReset(text)} />
    }

    return (
      <React.Fragment>
        <div className='container'>
          <h1>Your Spam Tracker</h1>
          <div action="" className='card'>
            <h3 className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde sit dolorem a. Odio officia numquam deleniti earum! Dolores doloribus consequatur velit architecto sequi similique asperiores nesciunt et ducimus a.
            </h3>
            {text === null ? (
              <Form 
                onSubmit={( value ) => {
                this.handleSubmit( value )
              } }
              />  
            ) 
            : <PreviewTrack 
                text={ text }
                onReset={() => this.handleReset(text)} /> 
            }
          {text && (
            <button
              className='btn btn-dark btn-space flex-center'
              onClick={() => this.setState({track: true})}
            >
              Track
            </button>
         
          )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
