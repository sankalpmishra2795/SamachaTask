import './App.css';
import { MobileHomePage } from './Pages/MobilePage/MobileHomePage';
import { HomePage } from './Pages/HomePage/HomePage';
import { useState, useEffect } from "react"




function App() {
    const [windowSize, setWindowSize] = useState(0)

    function handleResize() {
      setWindowSize(window.innerWidth)
    }
    useEffect(() => {
      window.addEventListener("resize", handleResize)
      handleResize()
    }, [])

    useEffect(() => {
      console.log(windowSize);      
    }, [windowSize])
  
   


  return (
    <>
    {windowSize <= 500 ?
       <MobileHomePage />
      :
       <HomePage />
    }
    </>
  );
}

export default App;
