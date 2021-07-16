import React, { Component } from 'react'

export class Bindingevents extends Component {
  constructor(){
      super()
      this.state = {
          message : "Hello Archents"
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
    
//     clickHandler(){
//         this.setState({
//             message : 'Welcome'
//         })
    
//   }
    clickHandler(){
        this.setState({
            message:'welcome'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* one of the approach to bind */}
                {/* <button onClick={this.clickHandler.bind(this)} >Click</button> */}
                {/* Second approach to bind is arrow function binding */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* Third Approach to Bind */}
                <button onClick={this.clickHandler}>Click</button>

                
            </div>
        )
    }
}

export default Bindingevents
