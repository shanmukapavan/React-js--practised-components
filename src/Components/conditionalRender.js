import React, { Component } from 'react'

export class conditionalRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged : true
        }
    }
    
     render() 
      {
        //   return(
        //       this.state.isLoggedIn ? 
        //      (<div>Welcome Archents</div>):
        //      (<div>Welcome Guests</div>)
              
        //   )
        //   let message
        //   if(this.state.isLoggedIn){
        //      message ="Welcome Archents" 
        //   }
        //   else{
        //      message = "Welcome Guest" 
        //   }
        //   return <div>{message}</div>
        if(this.state.isLogged){
            return(
                <div>
                    Welcome Archents
                </div>
            )
        }
        else{
            return(
                <div>
                    Welcome Guest
                </div>
            )
        }
    
     }


}

export default conditionalRender
