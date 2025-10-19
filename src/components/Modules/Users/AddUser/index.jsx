import FormUser from '@/components/Modules/Form/FormUsers/FormUser'
import { emailAtom, nameUserAtom, passwordAtom, profilAtom, roleAtom, tokenAtom, userNameAtom } from '@/jotai/atoms'
import { signUp } from '@/Utils/signUp'
import { useAtom } from 'jotai'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddUser = () => {
    const [name,] = useAtom(nameUserAtom)
    const [user_name,] = useAtom(userNameAtom)
    const [email,] = useAtom(emailAtom)
    const [password,] = useAtom(passwordAtom)
    const [role,] = useAtom(roleAtom)
    const [profil,] = useAtom(profilAtom)
    const [token,] = useAtom(tokenAtom)

    const navigate = useNavigate()


    const handleAddUser = async (e) => {
        e.preventDefault()
        try {
            if (!email.length > 4) toast.error("Cek kembali email anda")
            const data = { name, user_name, email, password, role, profil, token }
            const response = await signUp({ url: "signup", data })
            if (response.status === 201) {
                setTimeout(() => {
                    navigate("/login")
                }, 3000)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <FormUser
            name={name}
            userName={user_name}
            email={email}
            password={password}
            role={role}
            handleSubmit={handleAddUser}
            tombol="ADD"
            title="Tambah User"
        />

    )
}

export default AddUser
