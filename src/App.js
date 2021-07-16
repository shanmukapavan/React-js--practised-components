import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
// import React, { Component } from 'react';
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Hellowoj from './Components/Hellowoj'
import State from './Components/state'
import SetState from './Components/setState'
import Hooks from './Components/Hooks'
import Destr from './Components/Destr'
import Destrcls from './Components/Destrcls'
import FunctionClick from './Components/functionClick'
import Classclick from './Components/Classclick'
import Bindingevents from './Components/Bindingevents'
import ParentComponent from './Components/parentComponent'
import ConditionalRender from './Components/conditionalRender';
import ListRender from './Components/ListRender'



  



function App() {
  return (
    <div className="App">
      {/* <ListRender></ListRender> */}
     
      <ConditionalRender></ConditionalRender>
      {/* <ParentComponent></ParentComponent> */}
      {/* <Bindingevents></Bindingevents> */}
      {/* <FunctionClick></FunctionClick>
      <Classclick></Classclick> */}
       {/* <Hooks></Hooks>  */}
        {/* <SetState></SetState>    */}
       {/* <Destr name="pawan"  sentence="welcome to archents">
         <p> please carry on</p>
       </Destr> */}
       {/* <Destrcls name="pawan"  sentence="This is your seat">
         <p>please carry on</p>
       </Destrcls> */}
       {/* <State/>   */}
         {/* <Greet name="Harish" sentence="welcome to archents">
          <p>Here the offer letter</p>
        </Greet> 
        <Greet name="pawan"  sentence="welcome to archents"/>
        <Greet  name="Ram"   sentence="welcome to archents"/>   */}
      {/* <Welcome name="Harish" sentence="This is your seat">
        <p>please carry on</p>
      </Welcome>
      <Welcome name="pawan"  sentence="This is your seat"></Welcome>
      <Welcome name="Ram"    sentence="This is your seat"></Welcome>
       */}
      
      {/* <Hello/>
      <Hellowoj/> */}
    </div>
  );
}

export default App;
