import React from 'react'
import MenuLayout from '@layouts/MenuLayout'
import TableTemperatur from '@/components/Modules/DataTemperatur/TabelDataTemperatur/TableTemperatur'
import { Helmet } from 'react-helmet'

function Database() {
    return (
        <MenuLayout title="Database">
            <Helmet>
                <title>SIOSA - Database</title>
            </Helmet>
            <TableTemperatur title="Temperatur" />
        </MenuLayout>
    )
}

export default Database
