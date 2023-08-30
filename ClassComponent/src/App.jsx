import React, { Component } from 'react'
import Counter from './components/Counter';
import Counter1 from './components/Counter1';

export default class App extends Component {
 
  // to initialize vairable before loading we use constructor
  constructor(){
    super();
    this.state = {
      count:0
    }
  }

  componentDidMount(){
    console.log('componentDidMount : when component render first time')
  }
  componentWillUnmount(){
    console.log('component removed')
  }
  increment(){
    this.setState({count:this.state.count + 1})
  }
  decrement(){
    this.setState({count:this.state.count - 1})
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
   }
  render() { 
    return (
     <>
      <button onClick={this.decrement.bind(this)}>-</button>
      <Counter1/>
      <Counter number = {this.state.count}/>
      {/* if dont use bind, arrow function then this will unavailable */}
      {/* method-1 we can use Bind  or we can use arrow function in which this is available */}
      <button onClick={()=>this.increment()}>+</button>
     </>
    )
  }
}
