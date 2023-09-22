
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [colorClass, setColorClass] = useState('text-purple-500'); 

  // Function to toggle between purple and green classes
  const toggleColor = () => {
    setColorClass((prevClass) =>
      prevClass === 'text-purple-500' ? 'text-green-500' : 'text-purple-500'
    );
  };
  
  useEffect(() => {
    const interval = setInterval(toggleColor, 30000); // 30 seconds (30000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures it runs only once on mount


  return (
    <>
     
     <h1 className={`text-3xl font-bold underline ${colorClass}`}>
        Hello world!
      </h1>
 
  </>
  )
}

export default App
