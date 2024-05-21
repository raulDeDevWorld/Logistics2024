'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Card2 from '@/components/Card2'


function Admin() {
    // const { user } = useUser()
    const router = useRouter()

    function redirection(url) {
        router.push(url)
    }


    // useEffect(() => {
    //     setUserPdfData({})       
    // }, []);

    return (
        <>
            <img src="/truck.png" className='fixed  w-screen h-screen bg-[#01A7EB] object-cover lg:hidden' alt="" />
            <img src="/airplane-bg.jpg" className='fixed  w-screen h-screen bg-[#01A7EB] object-cover hidden md:block' alt="" />

            <div className='relative py-[100px] z-10'>
                <div className=' flex justify-center'>
                    <img src="/logo.svg" className='w-[50vw]' alt="User" />
                </div>

                <div className='flex flex-col justify-around items-center z-10'>
                    <Card2 img="/usuarios.png" buttonText={"Administrar Clientes"} click={(e) => redirection("Admin/Users")} />
                    <Card2 img="/editor.png" buttonText={"Editor Web"} click={(e) => redirection("Admin/Edit")} />
                    <Card2 img="/cotizador.png" buttonText={"Cotizador"} click={(e) => redirection("Admin/Cotizador")} />
                </div>
            </div>

            
        </>

    )
}

export default Admin