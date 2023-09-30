import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Data from './data.jsx'

function Myapp(){
    return(
        <div>
            <h1>this is custom app</h1>
        </div>
    )
}

// const reactelem = {
//     type: 'a',
//     props: {
//         href : "https://google.com",
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherone = (
//     <a href="https://google.com" target='_blank'>hello hello</a>
// )
const hey = 'some constant';

const reactelem = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    hey
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
    reactelem
)
