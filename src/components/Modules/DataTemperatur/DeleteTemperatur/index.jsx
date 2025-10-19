import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function DeleteTemperatur(d) {
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
    const navigate = useNavigate()
    async function handleDelete(dataId) {
        await axios.delete(import.meta.env.VITE_BASE_URL_SIOSA + `data_temperatur/${dataId}`)
        setIsOpenModalDelete(false)
        toast.success("Data deleted succesfully")

        setTimeout(() => {
            navigate("/database")
        }, 2000);
    }
    return (
        <>
            <button
                onClick={() => setIsOpenModalDelete(true)}
                className='btn btn-sm btn-error'
            >Delete
            </button>
            <div className={`modal ${isOpenModalDelete ? 'modal-open' : ''}`}>
                <div className='modal-box w-full max-w-screen-md'>
                    <div className='relative p-4 flex flex-col gap-4'>
                        <button
                            className='absolute -right-4 text-3xl text-red-600 -top-4'
                            onClick={() => setIsOpenModalDelete(false)}
                        >X</button>
                        <h3 className='text-2xl font-black'>Yakin ingin menghapus data {d.name}?</h3>

                        <div className='modal-action justify-center'>
                            <button
                                onClick={() => setIsOpenModalDelete(false)}
                                className='btn btn-primary'
                            >Cancel</button>
                            <button
                                onClick={() => handleDelete(d._id)}
                                className='btn btn-error'
                            >Delete</button>
                        </div>
                    </div>

                </div>

            </div >
        </>

    )
}

export default DeleteTemperatur
