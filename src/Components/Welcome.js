import React, {Component} from 'react'

class Welocome extends Component{
    render(){
        
        return (
            <div>
        <h1>Hello {this.props.name} welocome to archents , {this.props.sentence}</h1>
           {this.props.children}
           </div> 
        )
        
    }
}
export default Welocome