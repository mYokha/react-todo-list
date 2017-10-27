import React, { Component } from 'React'

class TextDisplay extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <div>I'm displaying text:</div>
        <div>{this.props.text}</div>
      </div>
    )
  }

}

export default TextDisplay
