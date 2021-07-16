import React from 'react'

// function Greet(){
//     return <h1>Hello Archents</h1>
// }

   const Greet = (props) =>{
//    props.name="shanmuk"
  return(
<div>
    <h1>
      Hello {props.name} {props.sentence}
   </h1>
       {props.children}
</div> 
  
  
  )


}




 export default Greet