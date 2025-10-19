import MenuLayout from '@/components/Layouts/MenuLayout'
import EditTemperatur from '@/components/Modules/DataTemperatur/EditTemperatur'
import React from 'react'
import { Helmet } from 'react-helmet'

const EditData = () => {
    return (
        <MenuLayout title="Edit Data">
            <Helmet>
                <title>SIOSA - Edit Data</title>
            </Helmet>
            <div className='bg-white mt-4 w-full'>
                <EditTemperatur />
            </div>
        </MenuLayout>
    )
}

export default EditData
