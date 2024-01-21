import React from "react"
import Display from "./Components/Display/Display"
import Login from "./Components/Login/Login"
import Usercontextprovider from "./Components/usecontext/Usercontextprovider"

function App() {

  return (
   <Usercontextprovider>
    <Login/>
    <Display/>
   </Usercontextprovider>
  )
}

export default App
