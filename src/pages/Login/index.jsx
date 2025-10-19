import LoginLayout from '../../components/Layouts/LoginLayout'
import { emailAtom, emailStorageAtom, passwordAtom, tokenStorageAtom } from '@/jotai/atoms'
import { auth } from '@/Utils/firebase'
import { signIn } from '@/Utils/signIn'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useAtom(emailAtom)
    const [password, setPassword] = useAtom(passwordAtom)
    const [, setEmailStorage] = useAtom(emailStorageAtom)
    const [, setTokenStorage] = useAtom(tokenStorageAtom)
    const [isLoading, setIsLoading] = useState(false)


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)

            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const token = await userCredential.user.getIdToken()
            const data = { email, token, password }
            const addToken = await signIn({ url: "signin", data })

            if (addToken.status === 200) {
                setTokenStorage(token)
                setEmailStorage(userCredential.user.email)

                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            }
        } catch (error) {
            setIsLoading(false)
            toast.error("Email/Password incorrect")
            console.log(error)
        }
    }

    return (
        <LoginLayout
            isLoading={isLoading}
            onSubmit={handleLogin}
            title="Login" path="/register" text="Don't Have Account?" to="Register" button="Login">
            <Helmet>
                <title>SIOSA - Login</title>
            </Helmet>
            <div className='flex flex-col gap-8 mt-10'>
                <div
                    className='form-control'>
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
                    <input
                        className='input input-bordered'
                        type='password'
                        required
                        placeholder='*******'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex gap-3 ml-2'>
                    <input
                        id="remember"
                        type="checkbox"
                        className=""
                    />
                    <h3>Remember me?</h3>
                    <Link className="text-indigo-700 underline" to="/forget_password">Forget Password</Link>
                </div>
            </div>
        </LoginLayout>
    )
}


export default Login
