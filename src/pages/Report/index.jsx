import React from 'react'
import MenuLayout from '@layouts/MenuLayout'
import AddTemperatur from '@/components/Modules/DataTemperatur/AddTemperatur'
import { Helmet } from 'react-helmet'

function Report() {
    return (
        <MenuLayout title="Make Report">
            <Helmet>
                <title>SIOSA - Make Report</title>
            </Helmet>
            <div className='bg-white mt-4 w-full'>
                <AddTemperatur />
            </div>
        </MenuLayout>

    )
}

export default Report
