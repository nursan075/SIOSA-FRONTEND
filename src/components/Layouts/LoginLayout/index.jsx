import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '@/Utils/firebase';
import { emailStorageAtom, tokenStorageAtom } from '@/jotai/atoms';
import { useAtom } from 'jotai';


const LoginLayout = ({ children, title, text, path, to, button, onSubmit, onClick, isLoading }) => {
    const [user, loading, error] = useAuthState(auth)
    const [emailStorage] = useAtom(emailStorageAtom)
    const [tokenStorage] = useAtom(tokenStorageAtom)


    if (loading) return <p>Loading</p>

    if (error) return <p>error...</p>

    if (user && emailStorage || tokenStorage) return location.replace("/")


    return (
        <div className='flex items-center justify-center bg-slate-200 h-screen'>
            <ToastContainer />
            <div className='bg-red-400 w-[400px] p-4 rounded-xl  shadow-white shadow-xl '>
                <form
                    onSubmit={onSubmit}
                    className='form flex flex-col mt-6'>
                    <div className='rounded-full'>
                        <h1 className='text-4xl font-bold text-white flex justify-center rounded-md h-12'>{title}</h1>
                    </div>

                    {children}

                    <div className='flex justify-center mt-6'>
                        <button
                            onClick={onClick}
                            className={isLoading ? "btn disabled bg-white text-red-400 rounded-md cursor-not-allowed" : "btn btn-md text-red-600"}>{isLoading ? "Check Akun" : button}</button>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <h3>{text}<Link to={path} className='text-blue-700 underline'> {to}</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginLayout
