import React, { Component } from 'react'

class UserInfo extends Component {

  handleNewId () {
    this.props.createNewUserId()
  }

  render() {
    return (
      <div>
        <div>{this.props.user.usernme}</div>
        <div>{this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
      </div>
    )
  }

}

export default UserInfo
