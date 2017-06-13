import React from 'react';

export default class Club extends React.Component {
  render(){
    return(
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.standing}</div>
      </div>
    )
  }
}
