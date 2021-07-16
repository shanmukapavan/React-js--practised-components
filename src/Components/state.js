import React, { Component } from 'react'

export class state extends Component {
    constructor(){
        super()
        this.state={
             message:"please subscribe to mychannel"
        }
    }
    changeMessage(){
        this.setState({
            message : "ThanQ for subscribing"
        })
    }
    
    render() {
        return(
            <div>
            <h1>
                {this.state.message}
            </h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        )
        
    }
}

export default state
