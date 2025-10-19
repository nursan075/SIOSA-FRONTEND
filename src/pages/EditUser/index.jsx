import MenuLayout from '@/components/Layouts/MenuLayout'
import FormLayout from '@/components/Modules/Form/FormLayot'
import EditUser from '@/components/Modules/Users/EditUser'
import React from 'react'
import { Helmet } from 'react-helmet'

const EditDataUser = () => {
    return (
        <MenuLayout title="Edit User">
            <Helmet>
                <title>SIOSA - Edit User</title>
            </Helmet>
            <EditUser />
        </MenuLayout>
    )
}

export default EditDataUser
