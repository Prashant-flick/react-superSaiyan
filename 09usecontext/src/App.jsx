import { useEffect, useState } from "react"
import { ThemeProvider} from "./Context"
import Card from "./components/Card"
import ThemeBtn from "./components/Themebtn"

function App() {
  const [thememode, setThememode] = useState("light")

  const lightTheme = () => {
    setThememode("light")
  }
  const darkTheme = () => {
    setThememode("dark")
  }

  //actual change
  useEffect(()=> {
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(thememode)
    // document.querySelector('#page').classList.remove("bg-black", "bg-white")
    // document.querySelector('#page').classList.add(thememode==="dark"?"bg-white":"bg-black")
    // document.querySelector('.card').classList.remove("bg-black", "bg-white")
    // document.querySelector('.card').classList.add(thememode==="dark"?"bg-black":"bg-white")
    // document.querySelector('.card2').classList.remove("bg-black", "bg-white")
    // document.querySelector('.card2').classList.add(thememode==="dark"?"bg-black":"bg-white")
  },[thememode])

  /*${thememode==="dark" ? "light" : "dark"}*/

  return (
    <ThemeProvider value={{thememode, lightTheme, darkTheme}}>
      <div id="page" className={` flex flex-wrap min-h-screen items-center`}>
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
