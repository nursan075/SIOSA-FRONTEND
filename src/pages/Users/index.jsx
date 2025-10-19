import MenuLayout from '@/components/Layouts/MenuLayout'
import TableUser from '@/components/Modules/Users/TabelUser/TableUser'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Users = () => {

    return (
        <MenuLayout title="Users">
            <Helmet>
                <title>SIOSA - Users</title>
            </Helmet>
            <Link to="/add_user" className='btn btn-sm md:btn-md btn-success m-2'>ADD User +</Link>
            <TableUser />
        </MenuLayout>
    )
}

export default Users
