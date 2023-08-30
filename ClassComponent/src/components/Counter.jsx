import React, { Component } from 'react'

export default class Counter extends Component {

   componentDidUpdate(prevProps){
    console.log(prevProps)
    if(prevProps.number !== this.props.number){
        console.log('component update')
    }
   }

  render() {
    return (
        <>
        <h1>helloe</h1>
         <button >{this.props.number}</button>
        </>
    )
  }
}
