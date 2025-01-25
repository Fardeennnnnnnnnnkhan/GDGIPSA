import React from 'react'
import { useTheme } from '../Context/ThemeContext';

const MovingText = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div id="movingtext" className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      <div className="con">
        <span className="tracking-tighter">G</span>
        <span className="tracking-tighter">D</span>
        <span className="tracking-tighter">G</span>
        <span className="text-black">x</span>
        <span className="text-black">IPSA</span>
        <h1 className="circle"></h1>
        <span className="tracking-tighter">G</span>
        <span className="tracking-tighter">D</span>
        <span className="tracking-tighter">G</span>
        <span className="text-black">x</span>
        <span className="text-black">IPSA</span>
        <h1 className="circle"></h1>
        <span className="tracking-tighter">G</span>
        <span className="tracking-tighter">D</span>
        <span className="tracking-tighter">G</span>
        <span className="text-black">x</span>
        <span className="text-black">IPSA</span>
        <h1 className="circle"></h1>
        <span className="tracking-tighter">G</span>
        <span className="tracking-tighter">D</span>
        <span className="tracking-tighter">G</span>
        <span className="text-black">x</span>
        <span className="text-black">IPSA</span>
        <h1 className="circle"></h1>
        <span className="tracking-tighter">G</span>
        <span className="tracking-tighter">D</span>
        <span className="tracking-tighter">G</span>
        <span className="text-black">x</span>
        <span className="text-black">IPSA</span>
        <h1 className="circle"></h1>
      </div>
    </div>
  );
  
}

export default MovingText
