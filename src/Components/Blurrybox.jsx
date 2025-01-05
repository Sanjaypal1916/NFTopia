import React from 'react';
import "../App.css";




const Blurrybox = ({Icon, content}) => {

  


  return (
    <div className=' stagger blurrycard relative w-full h-fit rounded-lg  bg-opacity-5  py-1 flex flex-row'>
      <div  className=' my-auto mx-4 p-2 bg-black border-gray-950 rounded-full border-2' > <Icon size={20} style={{color:"#00bf8f"}}/> </div>
      <p className='  text-1xl text-white mb-1 font-light'>{content}</p>
    </div>
  )
}

export default Blurrybox
