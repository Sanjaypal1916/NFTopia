
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { HiBadgeCheck, HiCurrencyRupee, HiLink, HiLockClosed, HiOutlineClipboardCheck, HiOutlineQrcode } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './App.css';
import myimage from './assets/SVG.png';
import Blurrybox from './Components/Blurrybox';
import Nav from "./Components/Nav";

function App() {
  const [count, setCount] = useState(0)

  const scrollref = useRef()
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

    gsap.from(scrollref.current.children, {
      scrollTrigger: {
        trigger: scrollref.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        markers: true,
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    })




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
      <Nav/>

        <div className='container h-fit  flex-row flex justify-center items-center bg-gradient '>
          <div className='h-full w-3/5 mx-2 '>

            <h1 className='text-6xl whitespace-pre-wrap font-bold text-gray-100 w-4/5 m-0 pt-52 ml-40 '>
              Simple Tools, Infinite Possibilities
            </h1>

            <p className='text-1xl  font-sans text-gray-100 w-2/3 m-0  ml-40 whitespace-normal mt-4'>Explore a world of creativity with exclusive NFTs from artists around the globe. Buy, sell, and trade NFTs securely on our trusted platform. Empowering creators and collectors with transparent, decentralized ownership.</p>


            <button ref={useref} onMouseEnter={sizegrow} onMouseLeave={sizeshrink} to="/login" className='rounded-xl border-2 border-customGreen px-12 py-2  mt-7 ml-40 text-pretty text-xl hover:bg-customGreen hover:text-black text-gray-50 ' style={{ borderRadius: '50px' }}><Link to={"/login"}>Getting Started</Link></button>

          </div>

          <div className='h-full w-2/5'>
            <div className='mt-28 p-7 w-5/6 ml-0 pl-0'>
              <img className="SVG  ml-0 " ref={useref} onMouseEnter={sizegrow} onMouseLeave={sizeshrink} src={myimage} alt="" />
            </div>
          </div>

        </div>

        <div className='container h-screen bg-gradient2  '>
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

            <div className='w-3/4 grid grid-cols-2 gap-6 h-fit max-h-fit mx-auto mt-14' ref={scrollref}>
              <Blurrybox className="stagger" Icon={HiBadgeCheck} content={'Dive into a world where blockchain technology powers fair gameplay, secure transactions, and exciting rewards for card game enthusiasts.'}></Blurrybox>
              <Blurrybox className="stagger" Icon={HiCurrencyRupee} content={'Unleash the potential of digital ownership by trading cards, competing in thrilling matches, and winning rewards that truly belong to you.'}></Blurrybox>
              <Blurrybox className="stagger" Icon={HiLockClosed} content={'Experience the future of card games, combining blockchain transparency with captivating gameplay. Build, strategize, and dominate the competition.'}></Blurrybox>
              <Blurrybox className="stagger" Icon={HiLink} content={'Say goodbye to fraud and unfair play. Our blockchain foundation ensures every move is secure, every card is traceable, and every win is yours.'}></Blurrybox>
              <Blurrybox className="stagger" Icon={HiOutlineClipboardCheck} content={'Say goodbye to fraud and unfair play. Our blockchain foundation ensures every move is secure, every card is traceable, and every win is yours.'}></Blurrybox>
              <Blurrybox className="stagger" Icon={HiOutlineQrcode} content={'Say goodbye to fraud and unfair play. Our blockchain foundation ensures every move is secure, every card is traceable, and every win is yours.'}></Blurrybox>
            </div>


          </div>

        </div>


        <div className='container h-screen bg-gradient3 '>
          
          <div className='w-2/3 h-5/6 m-auto p-3 '>
            <div className='w-full h-1/6 mx-auto rounded-lg text-center justify-center p-3'>
              <h1 className=' txt text-7xl whitespace-nowrap font-bold rounded-lg '>
                About Us
              </h1>
            </div>

            <div className='w-full h-full flex flex-row'>
              <div className='w-1/4 h-5/6  '>

                <div className='card h-2/5 rounded-lg my-4 p-3 flex justify-center items-center '>
                  <img className="  rounded-full h-auto w-auto" src={myimage} alt="" />
                </div>

                <div className='card h-3/5  rounded-lg my-4 p-3 justify-center items-center  text-white  overflow-y-scroll scrollbar-hide'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minima blanditiis, facilis aut magni assumenda, ad similique tempora molestiae delectus quas dolores nisi animi deleniti aliquam fuga rerum, voluptate harum. Saepe provident molestias sed quod magni voluptate laudantium? Quisquam v Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod accusantium dolorum impedit deserunt esse architecto provident? Cumque eius nam voluptas nostrum est similique ea, debitis deserunt consequuntur amet, deleniti sunt aliquam. Non atque ipsa assumenda odit minus officiis, nulla doloremque quos eligendi est doloribus molestias maiores enim cupiditate laudantium itaque deserunt at odio quas accusantium. Nostrum veniam libero quis sequi autem impedit delectus nesciunt molestias laudantium repellendus adipisci, voluptatum reiciendis iste harum nisi cupiditate cum. Doloremque, est aliquid. Doloribus, alias dicta!
                  </p>
                </div>

              </div>

              <div className='w-3/4 h-5/6 '>

                <div className='card h-3/5  rounded-lg m-4 p-3  text-white overflow-y-scroll scrollbar-hide'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus culpa reprehenderit quos ipsum, eius optio voluptates veritatis labore harum! Quos voluptatibus inventore, iste placeat ea cum dolore in? Delectus, eligendi! Delectus saepe ab cumque earum velit, nam possimus? Molestiae illo eius recusandae optio, deserunt autem, molestias ab id aliquam exercitationem voluptas in atque odit saepe vitae tenetur magnam est unde esse excepturi alias dolores tempora facilis quas. Voluptatum veniam delectus quos et necessitatibus provident blanditiis commodi. ipsum dolor sit amet, consectetur adipisicing elit. Iste minima blanditiis, facilis aut magni assumenda, ad similique tempora molestiae delectus quas dolores nisi animi deleniti aliquam fuga rerum, voluptate harum. Saepe provident molestias sed quod magni voluptate laudantium? Quisquam v Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero laborum impedit assumenda voluptas fugit non quo architecto incidunt perferendis enim tenetur asperiores natus placeat sit, inventore, corrupti
                  </p>
                </div>

                <div className=' card h-2/5  rounded-lg m-4 p-3 whitespace-normal text-wrap overflow-y-scroll text-white scrollbar-hide'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore error laudantium quasi facilis alias eligendi reiciendis quae necessitatibus corporis quod sunt repellendus, dolorem laboriosam? Possimus repellat maxime, sit nulla aut sed totam laboriosam corporis minus dolores esse aliquid provident, cumque dolorem itaque! Earum perspiciatis quaerat adipisci! Incidunt id, voluptas deleniti debitis animi molestiae quibusdam porro distinctio nesciunt necessitatibus, ad eveniet?
                </p>
                </div>

              </div>
            </div>
          </div>

          <div className='mt-20  justify-center text-center px-48 items-center text-gray-400 '>
            <hr className='border-gray-400'/>
            <p className='mt-2'>sanjaypal606060@gmail.com</p>
          </div>


        </div>
      </div>







    </>
  )
}

export default App
