import DeleteTemperatur from "@/components/Modules/DataTemperatur/DeleteTemperatur";
import ShowImage from "@/components/Modules/Modal/ShowImage";
import DeleteUser from "@/components/Modules/Users/DeleteUser";
import { Link } from "react-router-dom";

export const USERS = [
    {
        id: 1,
        name: "No.",
        grow: 0,
        cell: (row, index) => index + 1,
    },
    {
        id: 2,
        name: "Nama",
        selector: row => row.name,
        center: true,
        sortable: true,
        sortField: "name"
    },
    {
        id: 3,
        name: "User Name",
        selector: row => row.user_name,
        center: true,
        sortable: true
    },
    {
        id: 4,
        name: "Email",
        selector: row => row.email,
        center: true,
        sortable: true
    },
    // {
    //     id: 5,
    //     name: "Password",
    //     center: true,
    // selector: row => row.password
    // },
    {
        id: 6,
        name: "Photo Profil",
        center: true,
        cell: (users) => <img width={30} src={users.photo_profil ? users.photo_profil : import.meta.env.VITE_PROFIL} alt="Profil" />
    },
    {
        id: 7,
        name: "Role",
        center: true,
        selector: row => row.role,
        sortable: true
    },

    {
        id: 8,
        name: "Action",
        center: true,
        cell: (users) => <div className="flex gap-1">
            <Link to={`/edit_user/${users._id}`} className="btn btn-sm">Edit</Link>
            <DeleteUser users={users} />
        </div>,
        ignoreRowClick: true,
        allowOverflow: true,
    }
]
export const COLUMNS = [
    {
        id: 1,
        name: "No.",
        cell: (row, index) => index + 1,
    },
    {
        id: 2,
        name: "Nama Peralatan",
        selector: row => row.name,
        sortable: true
    },
    {
        id: 3,
        name: "Unit",
        selector: row => row.unit,
        center: false,
        sortable: true
    },
    {
        id: 9,
        name: "Waktu",
        selector: (data) => new Date(data.date).toLocaleTimeString('id', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            weekday: "long",
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }),
        center: true,
        wrap: true,
        grow: 2,
        sortable: true
    },
    {
        id: 4,
        name: "Waktu Input",
        selector: (data) => new Date(data.date).toLocaleTimeString('id', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            weekday: "long",
            year: "numeric",
            month: "numeric",
            day: "numeric"
        }),
        center: true,
        wrap: true,
        // grow: 2,
        sortable: true
    },
    {
        id: 5,
        name: "DE (°C)",
        selector: row => row.de,
        center: true,
        sortable: true
    },
    {
        id: 6,
        name: "NDE (°C)",
        selector: row => row.nde,
        center: true,
        sortable: true
    },
    {
        id: 7,
        name: "Body (°C)",
        selector: row => row.body,
        center: true,
        sortable: true
    },
    {
        id: 9,
        cell: (data) => <ShowImage data={data} />,
        ignoreRowClick: true
    },
    {
        id: 8,
        name: "Action",
        center: true,
        cell: (data) => <div className="flex gap-1">
            <Link to={`/edit_data/${data._id}`} className="btn btn-sm">Edit</Link>
            <DeleteTemperatur {...data} />
        </div>,
        ignoreRowClick: true
    }
]