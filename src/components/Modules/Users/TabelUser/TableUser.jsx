import React, { useEffect, useState, useMemo } from 'react'
import { USERS } from '@/constant/user'
import DataTable from 'react-data-table-component'
import { getData } from '@/Utils/getData'
import Filter from '@/components/Filter/filter'
import { useAtom } from 'jotai'
import { emailStorageAtom, tokenStorageAtom } from '@/jotai/atoms'
import ExportPdf from '@/components/Element/Export/ExportPdf'


const TableUser = () => {
    const [users, setUsers] = useState([])
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = users.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
    )
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <Filter
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        )
    }, [filterText, resetPaginationToggle])

    useEffect(() => {
        getData({ url: `users/${email}/${token}` }).then(result => {
            setUsers(result)
        })
    }, [])

    const tableHeader = ['No.', 'Nama', 'User Name', 'Email', 'Role']
    const tableBody = filteredItems.map((item, i) => [
        i + 1,
        item.name,
        item.user_name,
        item.email,
        item.role
    ])

    return (
        <div className='m-2 rounded-md'>
            <DataTable
                title="Tabel Users"
                columns={USERS}
                data={filteredItems}
                pagination
                user={users}
                highlightOnHover
                striped
                actions={<ExportPdf tableBody={tableBody} tableHeader={tableHeader} />}
                fixedHeaderScrollHeight='100vh'
                paginationResetDefaultPage={resetPaginationToggle}
                subHeaderComponent={subHeaderComponentMemo}
                subHeader
                persistTableHead
            />
        </div>
    )
}


export default TableUser
