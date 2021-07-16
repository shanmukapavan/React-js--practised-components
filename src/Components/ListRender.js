import React from 'react'
import Person from './Person';  

function ListRender() {
    const persons = [
        {
            id : 1,
            name : 'Harish',
            age : 26,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Ram',
            age : 24,
            skill : 'Angular' 
        },
        {
            id : 3,
            name : 'Pawan',
            age : 24,
            skill : 'Angular' 
        }
    ]
    const personList = persons.map(person=> <Person key = {persons.name} person ={person}/>)
    
     return <div> {personList} </div>

}

export default ListRender
