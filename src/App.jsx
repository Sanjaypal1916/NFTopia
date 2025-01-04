
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { HiBadgeCheck, HiCurrencyRupee, HiLink, HiLockClosed, HiOutlineClipboardCheck } from "react-icons/hi";
import './App.css';
import myimage from './assets/SVG.png';
import Blurrybox from './Components/Blurrybox';

import { HiOutlineQrcode } from "react-icons/hi";

function App() {
  const [count, setCount] = useState(0)

  const useref = useRef(null)
  const textRef = useRef(null); // Create a ref for the moving text

  useGSAP(() => {
    gsap.to('.SVG', {
      y: 10,
      duration: 1,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    }
    )
  }, [])



  useGSAP(() => {
    const element = textRef.current;

    // Create the moving text effect using GSAP
    gsap.fromTo(
      element,
      { x: '100%' }, // Start from the right outside the screen
      {
        x: '-100%', // Move to the left outside the screen
        duration: 10, // Duration of the animation (adjust for speed)
        ease: 'linear', // Smooth constant speed
        repeat: -1, // Repeat indefinitely
        repeatDelay: 0, // No delay between repeats
        // yoyo:true
      }
    );
  }, []);


  const sizegrow = () => {
    gsap.to(useref.current, {
      scale: 1.1,
      duration: 0.5,
      ease: 'power2.inOut'
    })
  }

  const sizeshrink = () => {
    gsap.to(useref.current, {
      duration: 0.5,
      scale: 1,
      ease: 'power2.inOut',
    })
  }






  return (
    <>
      <div className='container h-fit'>

        <div className='container h-fit  flex-row flex justify-center items-center bg-gradient '>

          <div className='h-full w-3/5 mx-2 '>

            <h1 className='text-6xl whitespace-pre-wrap font-bold text-gray-100 w-4/5 m-0 pt-52 ml-40 '>
              Simple Tools, Infinite Possibilities
            </h1>

            <p className='text-1xl  font-sans text-gray-100 w-2/3 m-0  ml-40 whitespace-normal mt-4'>Explore a world of creativity with exclusive NFTs from artists around the globe. Buy, sell, and trade NFTs securely on our trusted platform. Empowering creators and collectors with transparent, decentralized ownership.</p>


            <button ref={useref} onMouseEnter={sizegrow} onMouseLeave={sizeshrink} className='rounded-xl border-2 border-customGreen px-12 py-2  mt-7 ml-40 text-pretty text-xl hover:bg-customGreen hover:text-black text-gray-50 ' style={{ borderRadius: '50px' }}>Getting Started</button>

          </div>

          <div className='h-full w-2/5'>
            <div className='mt-28 p-7 w-5/6 ml-0 pl-0'>
              <img className="SVG  ml-0 " ref={useref} onMouseEnter={sizegrow} onMouseLeave={sizeshrink} src={myimage} alt="" />
            </div>
          </div>

        </div>

        <div className='container h-screen bg-gradient2 '>
          <div className="relative w-full overflow-hidden">
            <Marquee autoFill speed={150} direction='left' className="txt whitespace-nowrap  h-40 font-bold overflow-hidden">
              <h4 className='txt text-9xl  mr-10'>Decentralized </h4>
              <h4 className='txt text-9xl  mr-10'>Secure</h4>
              <h4 className='txt text-9xl  mr-10'>Modern</h4>
              <h4 className='txt text-9xl  mr-10'>Interactive</h4>
              <h4 className='txt text-9xl  mr-10'>Futuristic</h4>
              <h4 className='txt text-9xl  mr-10'>Dynamic</h4>
              <h4 className='txt text-9xl  mr-10'>Exciting</h4>
              <h4 className='txt text-9xl  mr-10'>Innovative</h4>
            </Marquee>
            <Marquee autoFill speed={150} direction='right' className="txt whitespace-nowrap  h-40 font-bold overflow-hidden">
              <h4 className='txt text-9xl  mr-10'>Decentralized </h4>
              <h4 className='txt text-9xl  mr-10'>Secure</h4>
              <h4 className='txt text-9xl  mr-10'>Modern</h4>
              <h4 className='txt text-9xl  mr-10'>Interactive</h4>
              <h4 className='txt text-9xl  mr-10'>Futuristic</h4>
              <h4 className='txt text-9xl  mr-10'>Dynamic</h4>
              <h4 className='txt text-9xl  mr-10'>Exciting</h4>
              <h4 className='txt text-9xl  mr-10'>Innovative</h4>
            </Marquee>

            <div className='w-3/4 grid grid-cols-2 gap-4 h-fit max-h-fit mx-auto mt-14'>
            <Blurrybox Icon={HiBadgeCheck} content={'Dive into a world where blockchain technology powers fair gameplay, secure transactions, and exciting rewards for card game enthusiasts.'}></Blurrybox>
            <Blurrybox Icon={HiCurrencyRupee} content={'Unleash the potential of digital ownership by trading cards, competing in thrilling matches, and winning rewards that truly belong to you.'}></Blurrybox>
            <Blurrybox Icon={HiLockClosed} content={'Experience the future of card games, combining blockchain transparency with captivating gameplay. Build, strategize, and dominate the competition.'}></Blurrybox>
            <Blurrybox Icon={HiLink} content={'Say goodbye to fraud and unfair play. Our blockchain foundation ensures every move is secure, every card is traceable, and every win is yours.'}></Blurrybox>
            <Blurrybox Icon={HiOutlineClipboardCheck} content={'Say goodbye to fraud and unfair play. Our blockchain foundation ensures every move is secure, every card is traceable, and every win is yours.'}></Blurrybox>
            <Blurrybox Icon={HiOutlineQrcode} content={'Say goodbye to fraud and unfair play. Our blockchain foundation ensures every move is secure, every card is traceable, and every win is yours.'}></Blurrybox>
            </div>


          </div>

        </div>


        <div className='container h-screen bg-gradient2 '>
          


        </div>
      </div>







    </>
  )
}

export default App
