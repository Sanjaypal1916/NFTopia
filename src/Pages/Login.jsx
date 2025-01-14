import React, { useEffect, useState } from 'react';
import "../App.css";
import Nav from "../Components/Nav";

const Login = () => {


 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setLightPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    }, 1); // Updates every 50ms (~0.05s)

    return () => clearInterval(interval);
  }, [mousePosition]);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };






  return (

    <div onMouseMove={handleMouseMove}
        className="relative h-screen w-screen bg-gradient3 overflow-hidden flex justify-center ">
    
        <Nav/>

        <div
        className="pointer-events-none absolute w-40 h-40 bg-customGreen opacity-50 rounded-full blur-3xl transition-all"
        style={{
            top: lightPosition.y - 80,
            left: lightPosition.x - 80,
        }}
        ></div>

        
        <div className='nav w-1/3 h-3/4  top-32 z-50 absolute  rounded-3xl'>
        
        <div>

        </div>
        
        
        
        
        
        
        
        
        
        </div>

    
    </div>
  )
}

export default Login
