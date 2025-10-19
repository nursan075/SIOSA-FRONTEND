import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailStorageAtom, tokenStorageAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'
import { toast } from 'react-toastify'

const DeleteUser = ({ users }) => {
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)
    const navigate = useNavigate()

    async function handleDelete(userId) {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BASE_URL_SIOSA}users/${userId}/${email}/${token}`)
            setIsOpenModalDelete(false)
            console.log(response)
            if (response.status == 200) {
                setTimeout(() => {
                    toast.success("User deleted succesfully")
                    navigate("/users")
                }, 2000);
            }

        } catch (error) {
            toast.error(error.message)
            console.error("Gagal menghapus user:", error.message)
            alert("Gagal menghapus user. Silakan cek koneksi atau ID user.")
        }
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
                        <h3 className='text-2xl font-black'>Yakin ingin menghapus {users.name}?</h3>

                        <div className='modal-action justify-center'>
                            <button
                                onClick={() => setIsOpenModalDelete(false)}
                                className='btn btn-primary'
                            >Cancel</button>
                            <button
                                onClick={() => handleDelete(users._id)}
                                className='btn btn-error'
                            >Delete</button>
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}

export default DeleteUser
