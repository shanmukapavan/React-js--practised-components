import React, { Component } from 'react'
import ChildComponent from './childComponent'

class parentComponent extends Component {
    constructor() {
        super()
    
        this.state = {
             parentName:'parent'
        }
    //   this.greetParent = this.greetParent.bind(this)  
    }
    greetParent(){
      this.setState({
          parentName:'child'
      })  
    }
    render() {
        return (
            <div>
                <div>{this.state.parentName}</div>
                <ChildComponent greetHandler={()=>{this.greetParent()}}></ChildComponent>
            </div>
        )
    }
}

export default parentComponent

