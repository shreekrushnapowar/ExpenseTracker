import React, { Component } from 'react'

export default class CounterApp extends Component {
  state = {count: 1234}

  constructor(){
    super()
    
  }
  decrement = () =>{
    this.setState({count: this.state.count-1},console.log(`new count ${this.state.count}`))
  }
  increment = () =>{
    this.setState({count: this.state.count+1},console.log(`This is incremented value ${this.state.count}`))
  }
  render() {
    return (
      <div className='container'>
        <button className="button btn btn-outline-secondary me-3" onClick={this.decrement}>Decrement</button>
        <span>{this.state.count}</span>
        <button className="button btn btn-outline-secondary ms-3" onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
