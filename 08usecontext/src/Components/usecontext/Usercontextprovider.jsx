import React from 'react'
import Usercontext from './Usercontext'
import { useState } from 'react'

const Usercontextprovider = ({children}) => {
    const [user, setuser] = useState(null)

    return(
        <Usercontext.Provider value={{user, setuser}}>
            {children}
        </Usercontext.Provider>
    )
}

export default Usercontextprovider