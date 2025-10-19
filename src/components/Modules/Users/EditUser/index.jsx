import FormUser from '@/components/Modules/Form/FormUsers/FormUser'
import { dataUserAtom, emailAtom, emailStorageAtom, nameUserAtom, passwordAtom, profilAtom, roleAtom, tokenStorageAtom, userNameAtom } from '@/jotai/atoms'
import { updateDataMulti } from '@/Utils/editData'
import { auth } from '@/Utils/firebase'
import { getDataById } from '@/Utils/getDataById'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditUser = () => {
    const [data, setData] = useAtom(dataUserAtom)
    const [name, setName] = useAtom(nameUserAtom)
    const [user_name, setUserName] = useAtom(userNameAtom)
    const [email, setEmail] = useAtom(emailAtom)
    const [password,] = useAtom(passwordAtom)
    const [role, setRole] = useAtom(roleAtom)
    const [photo_profil, setProfil] = useAtom(profilAtom)
    const [token, setTokenStorage] = useAtom(tokenStorageAtom)
    const [emailStorage, setEmailStorage] = useAtom(emailStorageAtom)

    const [nameUser, setNAmeUser] = useState('')
    const navigate = useNavigate()
    const [roleMe, setRoleMe] = useState('')
    const { id } = useParams()

    useEffect(() => {
        getDataById({ url: `user/${emailStorage}/${token}/${id}` }).then(result => {
            setName(result.name)
            setNAmeUser(result.name)
            setUserName(result.user_name)
            setEmail(result.email)
            setProfil(result.photo_profil)
            setRole(result.role)
        })
        getDataById({ url: `me/${emailStorage}/${token}` }).then(result => setRoleMe(result.role))
    }, [])

    function klikButton() {
        const formData = new FormData()
        formData.append("photo_profil", photo_profil)
        formData.append("name", name)
        formData.append("user_name", user_name)
        formData.append("email", email)
        formData.append("role", role)
        formData.append("password", password)

        setData(formData)
    }

    const handleEditUser = async (e) => {
        e.preventDefault()
        const response = await updateDataMulti({ url: `user/${emailStorage}/${token}/${id}`, data })
        if (response.status === 200) {
            setEmailStorage(email)

            if (emailStorage !== email) {
                const user = auth.currentUser
                if (user) {
                    user.getIdToken(true).then((token) => {
                        setTokenStorage(token);  // Simpan token baru di state atau atom
                        console.log("Token refreshed:", token);
                    }).catch((error) => {
                        console.error("Failed to refresh token:", error);
                    });
                }
            }

            setTimeout(() => {
                navigate("/");
            }, 2000)
        }
    }
    return (
        <FormUser
            name={name}
            userName={user_name}
            email={email}
            password={password}
            role={role}
            profil={photo_profil}
            roleMe={roleMe}
            handleSubmit={handleEditUser}
            onClick={klikButton}
            tombol="UPDATE"
            title={`Edit Data ${nameUser}`}
        />
    )
}

export default EditUser
