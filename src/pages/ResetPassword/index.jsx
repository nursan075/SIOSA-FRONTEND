import LoginLayout from '../../components/Layouts/LoginLayout'
import React from 'react'
import { Helmet } from 'react-helmet'

const ResetPassword = () => {
    return (
        <LoginLayout title="Reset Password" button="Add">
            <Helmet>
                <title>SIOSA - Reset Password</title>
            </Helmet>
            <div className='mt-4'>
                <div
                    className='form-control'>
                    <input
                        className='input input-bordered'
                        type='text'
                        required
                        placeholder='New Password'
                        onChange={(e) => set(e.target.value)}
                    />
                </div>
            </div>
        </LoginLayout>
    )
}

export default ResetPassword
