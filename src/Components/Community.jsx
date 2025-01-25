import React from "react";
import GDG from '../assests/GDGLOGO.png'
import ALGO from '../assests/algozenith.jpeg'
import GDGINDORE from '../assests/GDGINDORE.png'
import MLSA from '../assests/MLSA.png'
import CoinDCX from '../assests/CoinDCX.png'
import { useTheme } from "../Context/ThemeContext";
const Community = () => {
  const partners = [
    { id: 1, name: "Partner 1", logo: ALGO },
    { id: 4, name: "Partner 4", logo: CoinDCX },
    { id: 3, name: "Partner 3", logo: MLSA },
    { id: 2, name: "Partner 2", logo: GDGINDORE },
  ];
  const { theme, toggleTheme } = useTheme();
  
  return (
    <>
    <div className={`bg-${theme === 'dark' ? 'gray-900' : 'white'} py-20 px-5`}>
    <h2 className={`text-4xl font-bold text-center mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#2D3748]'}`}>
      Community Partners
    </h2>
    <div className={`w-28 h-1 ${theme === 'dark' ? 'w-40 h-1 bg-gradient-to-r from-yellow-400 to-red-400' : 'bg-[#0F9D58]'} mx-auto mt-4 rounded-lg mb-8`}></div>
    <div className="flex flex-wrap justify-center gap-10">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className={`w-32 h-32 flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-full overflow-hidden shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg`}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
    </>
  );
};

export default Community;
