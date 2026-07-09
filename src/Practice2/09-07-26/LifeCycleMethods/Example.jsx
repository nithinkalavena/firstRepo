import React, { Component } from 'react'

export class Example extends Component {
    componentDidMount(){
        console.log('Component mounted')
    }
    componentDidUpdate(){
        console.log('component updated')
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
  render() {
    return (
      <div><h1>Life Cycle Methods</h1></div>
    )
  }
}

export default Example