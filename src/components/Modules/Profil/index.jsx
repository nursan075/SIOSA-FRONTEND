import ExportExcel from '@/components/Element/Export/ExportExcel'
import ExportPdf from '@/components/Element/Export/ExportPdf'
import { COLUMNS } from '@/constant/user'
import { emailStorageAtom, tokenStorageAtom } from '@/jotai/atoms'
import { getData } from '@/Utils/getData'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'

const Profil = () => {
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)
    const [user, setUser] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        getData({ url: `me/${email}/${token}` }).then(result => {
            setUser(result)
            setData(result.data)
        })
    }, [])
    return (
        <div className="min-h-screen flex justify-center bg-gray-100 rounded-xl p-6">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 sm:p-10">
                    <div className="flex items-center justify-center space-x-4">
                        <div className='flex flex-col mt-8'>
                            <img
                                className="w-24 h-24 rounded-full border-4 border-white -mt-12"
                                src={user.photo_profil ? `${user.photo_profil}` : import.meta.env.VITE_PROFIL}
                                alt="User Avatar"
                            />
                            <Link to={`/edit_user/${user._id}`} className="btn btn-xs">Edit</Link>
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-gray-800">{user.name}</h1>
                            <p className="text-gray-600">Email : {user.email}</p>
                            <p className="text-gray-700 text-base"> user_name : {user.user_name}</p>
                        </div>
                    </div>
                    <div className="mt-6">

                        <div className="mt-4 text-gray-600">
                            <DataTable
                                title="My Data"
                                columns={COLUMNS}
                                data={data}
                                pagination
                                highlightOnHover
                                striped
                                actions={(
                                    <>
                                        <ExportPdf data={data} />
                                        <ExportExcel data={data} />
                                    </>
                                )}
                                fixedHeaderScrollHeight='100vh'
                                subHeader
                                persistTableHead
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil
