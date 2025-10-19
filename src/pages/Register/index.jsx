import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { emailAtom, nameUserAtom, passwordAtom, profilAtom, roleAtom, tokenAtom, userNameAtom } from '@/jotai/atoms'
import { signUp } from '@/Utils/signUp'
import LoginLayout from '../../components/Layouts/LoginLayout'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet'

const Register = () => {
    const [name, setName] = useAtom(nameUserAtom)
    const [user_name, setUserName] = useAtom(userNameAtom)
    const [email, setEmail] = useAtom(emailAtom)
    const [password, setPassword] = useAtom(passwordAtom)
    const [role,] = useAtom(roleAtom)
    const [profil,] = useAtom(profilAtom)
    const [token] = useAtom(tokenAtom)
    const [conPassword, setConPassword] = useState('')

    const navigate = useNavigate()

    const handleAdd = async (e) => {
        e.preventDefault()

        if (!email.length > 4) toast.error("Cek kembali email anda")
        if (password !== conPassword) toast.error("Password Tidak Cocok")

        try {
            if (password === conPassword) {
                const data = { name, user_name, email, password, role, profil, token }
                const response = await signUp({ url: "signup", data })

                if (response.status === 201) {
                    toast.success("Register berhasil, silahkan login")
                    setTimeout(() => {
                        navigate("/login")
                    }, 3000)
                } else {
                    toast.error(response.response.data.message)
                }
            }

        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <LoginLayout
            onSubmit={handleAdd}
            title="Register" path="/login" text="Have an Account?" to="Login" button="Register">
            <Helmet>
                <title>SIOSA - Register</title>
            </Helmet>
            <div className='flex flex-col gap-2 mt-4'>
                <div
                    className='form-control'>
                    <label className='label'>Nama Lengkap</label>
                    <input
                        className='input input-bordered'
                        type='text'
                        required
                        placeholder='Full Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div
                    className='form-control'>
                    <label className='label'>User Name</label>
                    <input
                        className='input input-bordered'
                        type='text'
                        required
                        placeholder='User_Name'
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div
                    className='form-control'>
                    <label className='label'>Email</label>
                    <input
                        className='input input-bordered'
                        type='email'
                        required
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div
                    className='form-control'>
                    <label className='label'>Password</label>
                    <input
                        className='input input-bordered'
                        type='password'
                        required
                        placeholder='******'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div
                    className='form-control'>
                    <label className='label'>Confirm Password</label>
                    <input
                        className='input input-bordered'
                        type='password'
                        required
                        placeholder='******'
                        onChange={(e) => setConPassword(e.target.value)}
                    />
                </div>
            </div>
        </LoginLayout>
    )
}

export default Register
