import React, { Component } from 'react'

class Child extends Component{
    componentDidMount(){
        console.log('Mounted')
    }
    componentWillUnmount(){
        console.log('unmounted')
    }
    render(){
        return <h2>Child component</h2>
    }
}
export class MountUnmount extends Component {
    state = {show:true}
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({show: !this.state.show})}>Toggle</button>
        {this.state.show && <Child/>}
      </div>
    )
  }
}

export default MountUnmount