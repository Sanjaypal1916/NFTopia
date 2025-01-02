
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import './App.css';
import myimage from './assets/SVG.png';




function App() {
  const [count, setCount] = useState(0)

  const useref = useRef(null)

useGSAP(()=>{
  gsap.to('.SVG', {
    y:10,
    duration:1,
    ease: 'power2.inOut',
    repeat:-1,
    yoyo:true
  }
  )
}, [])


const sizegrow = () =>{
  gsap.to(useref.current, {
    scale:1.1,
    duration:0.5,
    ease: 'power2.inOut'
  })
}

const sizeshrink = () =>{
  gsap.to(useref.current, {
    duration:0.5,
    scale:1,
    ease: 'power2.inOut',
  })
}






  return (
    <>
    <div className='w-screen h-fit-content'>

    <div className='w-screen h-screen  flex-row flex justify-center items-center bg-gradient '>
      <div className='h-full w-3/5  mx-2 '>
          <h1  className='text-6xl whitespace-pre-wrap font-bold text-gray-100 w-4/5 m-0 pt-52 pl-40 '>
          Simple Tools, Infinite Possibilities
          </h1>
          <p className='text-1xl  font-sans text-gray-100 w-2/3 m-0  pl-40 whitespace-normal mt-4'>Explore a world of creativity with exclusive NFTs from artists around the globe. Buy, sell, and trade NFTs securely on our trusted platform. Empowering creators and collectors with transparent, decentralized ownership.</p>

        <button ref={useref} onMouseEnter={sizegrow} onMouseLeave={sizeshrink} className='rounded-xl border-2 border-customGreen px-12 py-2  mt-7 ml-40 text-pretty text-xl hover:bg-customGreen hover:text-black text-gray-50 ' style={{borderRadius: '50px'}}>Getting Started</button>
      </div>

      <div className='h-full w-2/5  mr-0'>
      <div className='mt-28 p-7 mr-16 ml-0 pl-0'>
          <img className="SVG  ml-0 " ref={useref} onMouseEnter={sizegrow} onMouseLeave={sizeshrink} src={myimage} alt="" />
      </div>
      </div>
    </div>

    <div className='w-screen h-screen  flex-row flex justify-center items-center bg-gradient2 '></div>





    </div>
    </>
  )
}

export default App
