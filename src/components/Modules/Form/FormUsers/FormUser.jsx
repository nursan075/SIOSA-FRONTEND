import { emailAtom, nameUserAtom, passwordAtom, profilAtom, roleAtom, userNameAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'
import React from 'react'
import FormLayout from '../FormLayot'

const FormUser = (props) => {
    const [, setName] = useAtom(nameUserAtom)
    const [, setUserName] = useAtom(userNameAtom)
    const [, setEmail] = useAtom(emailAtom)
    const [, setPassword] = useAtom(passwordAtom)
    const [, setRole] = useAtom(roleAtom)
    const [, setProfil] = useAtom(profilAtom)

    return (
        <FormLayout title={props.title}>
            <div className='w-full max-w-screen-md h-full mr-2 shadow shadow-slate-300 p-2'>
                <form
                    onSubmit={props.handleSubmit}
                    className='flex flex-col gap-10 mt-6'>
                    <div className='flex flex-row gap-4 justify-between'>
                        <div className='flex flex-col gap-2 w-full'>
                            <div
                                className='form-control'>
                                <label className='label font-bold'>Nama Lengkap</label>
                                <input
                                    className='input input-bordered w-full'
                                    type='text'
                                    required
                                    placeholder='Nama Lengkap'
                                    value={props.name ? props.name : ""}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div
                                className='form-control'>
                                <label className='label font-bold'>User Name</label>
                                <input
                                    className='input input-bordered w-full'
                                    type='text'
                                    required
                                    placeholder='user_name'
                                    value={props.userName ? props.userName : ''}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div
                                className='form-control'>
                                <label className='label font-bold'>Email</label>
                                <input
                                    className='input input-bordered w-full'
                                    type='email'
                                    required
                                    placeholder='email@mail.com'
                                    value={props.email ? props.email : ""}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div
                                className='form-control'>
                                <label className='label font-bold'>Password</label>
                                <input
                                    className='input input-bordered w-full'
                                    type='password'
                                    required={props.tombol === "ADD"}
                                    placeholder='******'
                                    value={props.password ? null : ""}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {props.roleMe === "User" ? null : <div
                                className='form-control'>
                                <label className='label font-bold'>Role</label>
                                <select
                                    className='select input input-bordered w-full'
                                    type='text'
                                    value={props.role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option>Admin</option>
                                    <option>User</option>
                                </select>
                            </div>}

                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <label>Foto Profil</label>
                        <input
                            className='w-full border border-xl bg-red-100 shadow-md border-md'
                            type='file'
                            onChange={(e) => setProfil(e.target.files[0])}
                        />
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button
                            onClick={props.onClick}
                            type='submit'
                            className='btn btn-sm md:btn-md btn-primary'
                        >{props.tombol}</button>
                    </div>
                </form>
            </div>
        </FormLayout>

    )
}

export default FormUser
