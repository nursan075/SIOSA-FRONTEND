import { SIDEBAR_BOTTOM_LINKS, SIDEBAR_LINKS } from '@/constant/navigation';
import { emailStorageAtom, menuWideAtom, tokenStorageAtom } from '@/jotai/atoms';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react'
import { HiChevronDoubleLeft, HiCubeTransparent, HiOutlineLogout } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { bodyAtom, dateAtom, deAtom, nameAtom, ndeAtom, unitAtom } from "@/jotai/atoms";
import { auth } from '@/Utils/firebase';
import { signOut } from 'firebase/auth';
import { SignOut } from '@/Utils/signOut';
import { toast } from 'react-toastify';
import { getData } from '@/Utils/getData';

const linkClasses = `flex items-center gap-2 font-light px-3 py-2 ease-in-out hover:bg-neutral-400 active:bg-neutral-600 rounded-sm text-base`

function Sidebar({ }) {
    const [menuWide, setMenuWide] = useAtom(menuWideAtom)
    const [, setName] = useAtom(nameAtom)
    const [, setUnit] = useAtom(unitAtom)
    const [, setDe] = useAtom(deAtom)
    const [, setNde] = useAtom(ndeAtom)
    const [, setBody] = useAtom(bodyAtom)
    const [, setDate] = useAtom(dateAtom)
    const [emailStorage, setEmailStorage] = useAtom(emailStorageAtom)
    const [tokenStorage, setTokenStorage] = useAtom(tokenStorageAtom)
    const [isRole, setIsRole] = useState()

    const setNewData = () => {
        setName(null)
        setUnit("1")
        setDe(null)
        setNde(null)
        setBody(null)
        setDate(new Date())
    }
    const handleWide = () => {
        setMenuWide(!menuWide)
    }

    useEffect(() => {
        getData({ url: `me/${emailStorage}/${tokenStorage}` }).then(result => {
            if (result.role === "User") {
                setIsRole(true)
            } else {
                setIsRole(false)
            }
        })
    }, [])


    const LogOut = async () => {
        try {
            const data = { email: emailStorage, token: tokenStorage }
            const deleteToken = await SignOut({ url: `signout/${emailStorage}/${tokenStorage}`, data })
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
        <div className='fixed top-0 left-0 sm:drawer-open flex flex-col z-40 px-2 max-h-screen'>
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className='duration-500 drawer-side sm:h-screen h-[800px]'>
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                <div className={`menu relative bg-white min-h-screen ${menuWide ? 'w-56' : 'w-16'} p-2 display-block`}>

                    <div className="mt-2 mb-4 lg:mb-8 pt-2">
                        <Link to="/" className="flex gap-2 items-center px-2 text-indigo-700 text-2xl lg:text-4xl font-black">
                            <span className={`${!menuWide && 'rotate-180'} duration-1000`}><HiCubeTransparent /></span><i className={`${!menuWide && 'hidden'}`}>SIOSA</i>
                        </Link>
                    </div>

                    {/* Sidebar nav */}
                    <div className={`z-10 absolute bottom-40 lg:hidden left-20 rounded-full cursor-pointer ${!menuWide && 'rotate-180 left-4'} duration-500`}>
                        <HiChevronDoubleLeft
                            onClick={handleWide}
                            size={24} />
                    </div>
                    <div className="dropdown dropdown-hover flex-1 py-8 flex flex-col gap-2 mt-2">
                        {SIDEBAR_LINKS.map((item) => {
                            return (
                                <SideBarLink onClick={setNewData} key={item.key} item={item} menuWide={menuWide} isRole={isRole} />
                            )
                        }
                        )}
                    </div>
                    <div className={`absolute bottom-40 left-20 hidden lg:block rounded-full cursor-pointer ${!menuWide && 'rotate-180 left-4'} duration-500`}>
                        <HiChevronDoubleLeft
                            onClick={handleWide}
                            size={24} />
                    </div>
                    <div className='dropdown flex flex-col border-t border-neutral-700'>
                        {SIDEBAR_BOTTOM_LINKS.map(item => {
                            return (
                                <SideBarLink key={item.key} item={item} menuWide={menuWide} isRole={isRole} />
                            )
                        }
                        )}
                        <div
                            onClick={LogOut}
                            className={classNames('cursor-pointer text-red-400', linkClasses)}>
                            <span className='text-xl tabIndex={0} role="button" className="btn m-1'><HiOutlineLogout /></span>
                            <span className={`${!menuWide && 'hidden'}`}>
                                <button >
                                    Logout
                                </button>
                            </span>
                        </div>
                    </div>
                    {/* Sidebar nav */}
                </div>
            </div>
        </div>
    )
}
function SideBarLink({ item, menuWide, onClick, isRole }) {

    const { pathname } = useLocation()
    return (
        <Link onClick={onClick} to={item.path} className={classNames(pathname === item.path ? "bg-neutral-200" : "", item.isRole === isRole ? "hidden" : "block", linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            <span className={`${!menuWide && 'hidden'}`}>{item.label}</span>
        </Link>
    )
}

export default Sidebar
