import React, { Component } from 'react'

export class Destrcls extends Component {
    render() {
        const {name,sentence,children} =  this.props
        return (
            <div>
        <h1>Hello {name} welocome to archents , {sentence}</h1>
               {children} 
           </div> 
        )
        
    }
}

export default Destrcls
