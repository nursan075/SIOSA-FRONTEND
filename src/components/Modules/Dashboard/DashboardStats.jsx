
import { emailStorageAtom, tokenStorageAtom } from '@/jotai/atoms'
import { getData } from '@/Utils/getData'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { RiFileEditFill } from 'react-icons/ri'

function BoxWrapper({ children }) {
    return (
        <div className='gap-8 bg-base-100 rounded-box mx-auto p-4 border border-gray-200 grid grid-cols-4 lg:grid-cols-4 items-center justify-center h-20 lg:h-full md:w-full lg:w-60'>{children}</div>
    )
}

function DataDisplay({ title, data, color }) {
    return (
        <>
            <div className={`rounded-full h-12 w-12 flex items-center justify-center bg-${color}`}>
                <RiFileEditFill size={24} className='text-slate-100' />
            </div>
            <div className='ml-6 flex gap-4'>
                <span className='text-sm text-gray-500 font-light'>{title}</span>
                <div className='flex items-center'>
                    <strong className='text-3xl text-gray-700 font-bold'>{data}</strong>
                </div>
            </div>
        </>
    )
}


function DashboardStats() {
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)
    const [dataTemp, setDataTemp] = useState([])
    const [myData, setMyData] = useState('')

    useEffect(() => {
        getData({ url: `data_temperatur/${email}/${token}` }).then(result => setDataTemp(result))
        getData({ url: `me/${email}/${token}` }).then(result => setMyData(result.data))
    }, [])

    const totalUnit2 = dataTemp.filter(item => item.unit === "2").length
    const totalUnit1 = dataTemp.filter(item => item.unit === "1").length


    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4 flex-wrap mt-4'>
            <BoxWrapper>
                <DataDisplay
                    title="Total Data"
                    data={dataTemp.length}
                    color='red-400'
                />
            </BoxWrapper>
            <BoxWrapper>
                <DataDisplay
                    title="Data Unit #1"
                    data={totalUnit1}
                    color='indigo-400'
                />
            </BoxWrapper>
            <BoxWrapper>
                <DataDisplay
                    title="Data Unit #2"
                    data={totalUnit2}
                    color='sky-500'
                />
            </BoxWrapper>
            <BoxWrapper>
                <DataDisplay
                    title="My Data"
                    data={myData.length ? myData.length : "0"}
                    color="slate-400"
                />
            </BoxWrapper>

        </div>
    )
}

export default DashboardStats
