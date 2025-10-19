import LoginLayout from '../../components/Layouts/LoginLayout'
import React from 'react'
import { Helmet } from 'react-helmet'

const ForgetPassword = () => {
    return (
        <LoginLayout title="Forget Password" button="Send">
            <Helmet>
                <title>SIOSA - Forget Password</title>
            </Helmet>
            <div className='mt-4'>
                <div
                    className='form-control'>
                    <input
                        className='input input-bordered'
                        type='text'
                        required
                        placeholder='Email'
                        onChange={(e) => set(e.target.value)}
                    />
                </div>
            </div>
        </LoginLayout>
    )
}

export default ForgetPassword
