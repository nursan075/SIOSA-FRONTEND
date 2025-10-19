import MenuLayout from '@/components/Layouts/MenuLayout'
import Profil from '@/components/Modules/Profil'
import React from 'react'
import { Helmet } from 'react-helmet'

const ProfilUser = () => {
    return (
        <MenuLayout title="Profil">
            <Helmet>
                <title>SIOSA - Profil</title>
            </Helmet>

            <Profil />

        </MenuLayout>
    )
}

export default ProfilUser
