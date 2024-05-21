'use client';
import { useUser } from '@/context/Context'
import { onAuth, signUpWithEmail } from '@/firebase/utils'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/app/page.module.css'
// import Button from '@/components/Button'
import Error from '@/components/Error'
import Video from '@/components/Video'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import Input from '@/components/Input'
import { useRouter } from 'next/navigation';
import Subtitle from '@/components/Subtitle'

const db = [
  {
    title: 'ESTACIÓN DE FLETE DE CONTENEDORES',
    image: '/container.png',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat voluptatem magni sequi in.'
  },
  {
    title: 'ESTACIÓN DE FLETE DE CONTENEDORES',
    image: '/container.png',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat voluptatem magni sequi in.'
  },
  {
    title: 'ESTACIÓN DE FLETE DE CONTENEDORES',
    image: '/container.png',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat voluptatem magni sequi in.'
  },
]
function Componente({ title, image, paragraph }) {
  return <div className='bg-[#ffffffcb] my-5 flex  lg:max-w-[500px] lg:text-[18px] lg:mx-5 lg:flex lg:flex-col lg:justify-center lg:items-center rounded-[15px]'>
    <img src={image} className=" w-[150px] lg:max-w-[200px] object-contain p-5" alt="" />
    <div className="w-full bg-[#2e62d1ce] p-5 py-5 rounded-b-[15px]">
      <h4 className="w-full text-left font-medium border-b-[3px] text-white pb-5 pl-0 ml-0 border-[#ffffff] p-5">{title}</h4>
      <p className="text-white " >
        {paragraph}
      </p>
      <div className="relative flex justify-end w-[100%]">
        <button className="inline-block bg-[#ffb834] px-3 text-[12px] border text-center font-medium py-2 m-1  
           cursor-pointer rounded-[5px]">Saber mas</button>
      </div>
    </div>
  </div>
}
function Item({ e1, e2 }) {
  return <ScrollAnimation animateIn='flipInX'
    afterAnimatedIn={function afterAnimatedIn(v) {
      var t = "Animate In finished.\n";
      t += 'v.onScreen: ' + v.onScreen + '\n';
      t += 'v.inViewport: ' + v.inViewport;

    }}
    initiallyVisible={true}>
    <div className='flex flex-col justify-center items-center'>
      <span className='text-[30px] font-medium'>{e1}</span>
      <span className='text-center'>{e2}</span>
    </div>
  </ScrollAnimation>
}
function Section({ subtitle, video, gradiente, id, children }) {
  return <section className='relative w-full bg-[#4f8cc5] overflow-x-hidden overflow-hidden' id={id}>






    {/* <div  className={`absolute top-0  w-full  object-cover z-10 ${gradiente}`} > */}

    {/* <div  className='absolute px-5 py-12 w-full min-h-[100vh]  bg-gradient-to-tr from-[#000000c5] via-[#3259c5a9] to-[#2A52BE]'>
            */}

    {/* <div  className='absolute px-5 py-12 w-full min-h-screen flex flex-col z-30 lg:flex-row justify-around items-center  bg-gradient-to-tr from-[#000000c5] via-[#3259c5a9] to-[#2A52BE]'>
            </div> */}

    <div className='relative px-5 py-12 w-full min-h-[50vh] mflex flex-col z-50 lg:flex-row justify-around items-center  bg-gradient-to-tr from-[#000000c5] via-[#3259c5a9] to-[#2A52BE] '>
      <div>
        <Subtitle><h3 className='text-[30px] text-[white] text-center font-medium  py-10'>{subtitle}</h3></Subtitle>
        <ScrollAnimation animateIn='bounceInRight'
          animateOut='bounceOutLeft'
          initiallyVisible={true}
        >
          <p className=' text-[16px] text-[white]'>
            Nuestro servicio de transporte terrestre nacional e internacional se caracteriza por ser adaptable de acuerdo a su negocio, realizamos transportes locales, interdepartamentales e internacionales en las modalidades ftl (full-truckload) y ltl (less-than-truckload), para carga general, refrigerada, maquinarias y mercancías peligrosas.
          </p>
        </ScrollAnimation>
      </div>
      <div className='w-full text-[white] grid grid-cols-2 gap-5 py-12'>

        <Item e1={'1 a 2tn'} e2={'Camionetas'} />
        <Item e1={'hasta 20tn'} e2={'Camiones'} />
        <Item e1={'La paz, Bolivia'} e2={'SEDE MUNDIAL'} />
        <Item e1={'100 000 $'} e2={'FACTURACIÓN EN DOLARES EN 2023'} />
        <Item e1={'2017'} e2={'AÑO DE FUNDACIÓN'} />

      </div>
      <div className='grid grid-cols-2 gap-2 w-full '>
        <span></span>
        {/* <button type="button" className="w-full  border-[2px]  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
    Contactar
    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
    </svg>
  </button> */}

        <button type="button" className="w-full border-[2px]  text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
          Orden de servicio
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>


      </div>
    </div>
    <div className='relative min-h-screen w-full flex flex-col lg:flex-wrap  lg:flex-row lg:justify-center justify-top z-20 '>
      {/* <Subtitle> <h2  className="w-[100vw] text-[white] text-center text-[25px] font-medium">{subtitle}</h2></Subtitle> */}

      <video className='absolute bottom-0  w-full h-full min-h-[100vh] object-cover z-10' autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      {/* <div  className='relative px-5 py-12 w-full flex flex-col  lg:flex-row justify-around items-center  bg-gradient-to-tr from-[#2A52BE] via-[#3259c5] to-[#2A52BE]'>
          <div> */}
      {/* <div  className='relative px-5 py-12 w-full flex flex-col  lg:flex-row justify-around items-center  bg-gradient-to-tr from-[#2A52BE] via-[#3259c5] to-[#2A52BE]'>
            <div> */}
      {/* <div  className='relative px-5 py-12 w-full flex flex-col  lg:flex-row justify-around items-center '>
            <div> */}




      {db.map((i, index) => {
        return <div className='inline px-5 z-50' key={index}>
          <Componente title={i.title} image={i.image} paragraph={i.paragraph} />
        </div>
      })}



    </div>

  </section>

}



const Button = ({ children }) => {
  return <button className='bg-[#ffbd2f] w-[200px] p-2 rounded-[5px] inline'>
    {children}
  </button>
}
export default function Home() {

  const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()
  const router = useRouter()


  const signUpHandler = (e) => {

  }

  useEffect(() => {

  }, [user, success]);


  console.log(user)
  return (

    <div className="min-h-full"
      style={{
        backgroundImage: 'url(/gif.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}>






      {/* <video  className='absolute top-0  w-full min-h-[100vh] object-cover z-10' autoPlay loop muted>
      <source src='underwater.mp4' type="video/mp4" />
    </video>  */}
      <img src="/truck.png" className='absolute  w-screen h-screen bg-[#01A7EB] object-cover lg:hidden' alt="" />

      <img src="/airplane-bg.jpg" className='absolute  w-screen h-screen bg-[#01A7EB] object-cover hidden md:block' alt="" />

      <div className='relative  min-h-screen z-10 flex flex-col justify-around items-center'>

        <Button> Transporte Terrestre  </Button> 
        <Button> Transporte Maritimo  </Button> 
        <Button> Transporte Aereo  </Button> 
        <Button> Carga Proyecto  </Button> 
  

      </div>






      {/* <Section subtitle='TRANSPORTE TERRESTRE' video='/highway2.mp4' degrade='#00000067' id="terrestre"></Section>
      <Section subtitle='TRANSPORTE AEREO' video='/avion.mp4' degrade='#00000018' id="aereo"></Section>
      <Section subtitle='TRANSPORTE MARITIMO' video='/barco.mp4' degrade='#00529657' id="maritimo"></Section> */}


    </div>
  )
}
