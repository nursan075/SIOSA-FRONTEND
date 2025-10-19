import DeleteTemperatur from "@/components/Modules/DataTemperatur/DeleteTemperatur"
import ShowImage from "@/components/Modules/Modal/ShowImage"
import { Link } from "react-router-dom"

export const COLUMNS_VIBRASI = [
    {
        "id": 1,
        "name": "Nama Peralatan",
        selector: row => row.nama_peraltan,
        sortable: true
    },

    {
        "id": 2,
        "name": "Unit",
        selector: row => row.unit,
        sortable: true
    },
    {
        "id": 3,
        "name": "Waktu Input",
        selector: row => row.time,
        sortable: true
    },
    {
        "id": 4,
        "name": "DE (mm/s)",
        selector: row => row.de,
        sortable: true
    },
    {
        "id": 5,
        "name": "NDE (mm/s)",
        selector: row => row.nde,
        sortable: true
    },
    {
        "id": 6,
        "name": "Axial (mm/s)",
        selector: row => row.axial,
        sortable: true
    },
    {
        "id": 7,
        "name": "Diinput Oleh",
        selector: row => row.oleh,
    }
]
export const COLUMNS_TEMPERATUR = (isRole) => [
    {
        id: 1,
        name: "No.",
        cell: (row, index) => index + 1,
    },
    {
        id: 2,
        name: "Nama Peralatan",
        selector: (data) => (data.image ? <Link to={import.meta.env.VITE_BASE_URL_SIOSA + data.images[0].path}>{data.name}</Link> : data.name),
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
        id: 4,
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
        id: 5,
        name: "Waktu Input",
        selector: (data) => new Date(data.createdAt).toLocaleTimeString('id', {
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
        id: 6,
        name: "DE (°C)",
        selector: row => row.de,
        center: true,
        sortable: true
    },
    {
        id: 7,
        name: "NDE (°C)",
        selector: row => row.nde,
        center: true,
        sortable: true
    },
    {
        id: 8,
        name: "Body (°C)",
        selector: row => row.body,
        center: true,
        sortable: true
    },
    {
        id: 9,
        name: "Diinput Oleh",
        selector: (data) => data.inputBy.name,
        sortable: true
    },
    {
        id: 11,
        cell: (data) => <ShowImage data={data} />,
        ignoreRowClick: true
    },
    (isRole ?
        {
            id: 10,
            name: "Action",
            center: true,
            cell: (data) => <div className="flex gap-1">
                <Link to={`/edit_data/${data._id}`} className="btn btn-sm">Edit</Link>
                <DeleteTemperatur {...data} />
            </div>,
            ignoreRowClick: true
        }
        : {})
]