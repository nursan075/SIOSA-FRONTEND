import React from 'react'
import { SlClose } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const FormLayout = (props) => {
    const navigate = useNavigate()

    function navigateClose() {
        navigate('/')
    }

    return (
        <div className='m-2 bg-white rounded-md'>
            <ToastContainer />
            <div className='flex justify-between'>
                <h3
                    className='ml-4 text-xl lg:text-2xl font-black'
                >{props.title}
                </h3>
                <button
                    onClick={() => {
                        navigateClose()
                    }}
                    className='lg:text-3xl text-red-500 m-2'
                ><SlClose />
                </button>
            </div>
            <div className='flex justify-center p-4'>
                {props.children}
            </div>
        </div>
    )
}

export default FormLayout
