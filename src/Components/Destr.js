import React from 'react';

const Destr = ({name, sentence,children}) =>{
    
      return(
    <div>
        <h1>
          Hello {name} {sentence}
       </h1>
            {children} 
    </div> 
      
      
      )
    
    
    }
    export default Destr
    