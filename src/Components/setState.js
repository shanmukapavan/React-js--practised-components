import React, { Component } from 'react'

 class setState extends Component {
    
    constructor(){
        super()
        this.state = {
          count : 0 
        }
    }
    increment(){
        this.setState({
            count:this.state.count + 1  
        },
        ()=>{
            console.log('callback value', this.state.count)
        }
        )
        console.log(this.state.count)
     }
     decriment(){
         this.setState({
             count:this.state.count - 1
         })
     }
      
    render() {
        return (
            <div>
               <div>count-{this.state.count}</div>
               <button onClick={()=>this.increment()}>Increment</button>
               <button onClick={()=>this.decriment()}>Decriment</button> 

            </div>
        )
    }
}

export default setState

