import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { useAtom } from 'jotai'
import { emailStorageAtom, menuWideAtom, tokenStorageAtom } from '@/jotai/atoms'
import { ToastContainer } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/Utils/firebase'
import { getData } from '@/Utils/getData'



function MenuLayout({ children, title }) {
    const [menuWide,] = useAtom(menuWideAtom)
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)


    const [user, loading, error] = useAuthState(auth)

    if (loading) return <p>Loading</p>

    if (error) return <p>error...</p>

    if (!user || !email || !token) return location.replace("/login")


    return (

        <div className="relative flex bg-slate-400 w-screen h-screen" >
            <Sidebar />
            <div className={`flex flex-col gap-1 w-full ${menuWide ? 'sm:ml-60' : 'sm:ml-20'} duration-500`}>
                <div className=''>
                    <Header title={title} />
                    <ToastContainer />
                </div>
                <div className='bg-white mt-20 rounded-md p-4 mb-2'>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MenuLayout
