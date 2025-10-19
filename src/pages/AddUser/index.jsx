import MenuLayout from '@/components/Layouts/MenuLayout'
import AddUser from '@/components/Modules/Users/AddUser'
import React from 'react'
import { Helmet } from 'react-helmet'

const AddUserPage = () => {
    return (
        <MenuLayout title="Add User">
            <Helmet>
                <title>SIOSA - Add User</title>
            </Helmet>
            <AddUser title="Tambah User" />
        </MenuLayout>
    )
}

export default AddUserPage
