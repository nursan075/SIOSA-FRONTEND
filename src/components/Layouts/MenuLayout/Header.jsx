import { emailStorageAtom, menuWideAtom, tokenStorageAtom, } from '@/jotai/atoms'
import { auth } from '@/Utils/firebase'
import { getData } from '@/Utils/getData'
import { SignOut } from '@/Utils/signOut'
import { signOut } from 'firebase/auth'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { HiCubeTransparent } from 'react-icons/hi'
import { RiApps2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Header({ title }) {
    const [menuWide,] = useAtom(menuWideAtom)
    const [email, setEmailStorage] = useAtom(emailStorageAtom)
    const [token, setTokenStorage] = useAtom(tokenStorageAtom)
    const [userLogin, setUserLogin] = useState({})

    useEffect(() => {
        getData({ url: `me/${email}/${token}` }).then(result => {
            setUserLogin(result)
        })
    }, [email, token])

    const LogOut = async () => {
        try {
            const data = { email, token }
            const deleteToken = await SignOut({ url: `signout/${email}/${token}`, data })
            if (deleteToken.status === 200) {
                await signOut(auth)
                setEmailStorage(null)
                setTokenStorage(null)
            }
            else {
                toast.info("Can't sign out now!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header className="fixed z-30 navbar shadow bg-sky-500 h-20 flex items-center rounded-b-xl justify-between">
            <label htmlFor="my-drawer-2" className="cursor-pointer rounded-md bg-ghost m-2 sm:hidden">
                <RiApps2Line size={32} className='text-slate-200' />
                <Link to="/" className="flex gap-2 items-center px-2 text-red-700 text-2xl lg:text-4xl font-black">
                    <span><HiCubeTransparent /></span><i>SIOSA</i>
                </Link>
            </label>
            <h1 className="hidden sm:block ml-2 lg:text-4xl text-3xl text-white">{title}</h1>
            <div className={`flex gap-2  ${menuWide ? 'sm:mr-60' : 'sm:mr-20'}`}>
                <h1 className='hidden sm:block text-white'>{userLogin.name}</h1>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" hover:bg-sky-300 avatar rounded-badge">
                        <div className="h-14 w-10 rounded-full">
                            <img width={30} src={userLogin.photo_profil ? `${userLogin.photo_profil}` : import.meta.env.VITE_PROFIL} alt="Profil" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/profil">Profile</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><button onClick={LogOut}>
                            Logout
                        </button>
                        </li>
                    </ul>
                </div>
            </div>

        </header>

    )
}

export default Header
