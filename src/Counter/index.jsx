

import React, { Component } from 'react';

class Counter extends Component {
constructor(props){
  super(props);
  this.state = {
    count: 0,
  };
}

increment = () => {
  this.setState({count: this.state.count + 1})

};

decrement = () => {
  this.setState({count: this.state.count - 1})

};

  render() {
    return (
      <>
      <div>
        <Count count={this.state.count} />
        {this.state.count}
      </div>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.increment}>+</button>
      </>
    );
  }
}



export default Counter;

function Count({count}){
  return <div>Props: {count}</div>
}