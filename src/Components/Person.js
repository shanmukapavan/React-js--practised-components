import React from 'react'

function Person({person}) {
    return (
        <div>
           <h2>
            I am {person.name} . Iam { person.age} years old . I know {person.skill}
            
          </h2> 
        </div>
    )
}

export default Person
