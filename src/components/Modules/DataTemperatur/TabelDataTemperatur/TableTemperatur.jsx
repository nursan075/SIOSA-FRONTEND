import React, { useEffect, useMemo, useState } from 'react'
import { COLUMNS_TEMPERATUR } from '@/constant/columns';
import { getData } from '@/Utils/getData';
import DataTable from 'react-data-table-component';
import Filter from '@/components/Filter/filter';
import { useAtom } from 'jotai';
import { emailStorageAtom, tokenStorageAtom } from '@/jotai/atoms';
import ExportPdf from '@/components/Element/Export/ExportPdf';
import ExportExcel from '@/components/Element/Export/ExportExcel';

function TableTemperatur({ }) {
    const [data, setData] = useState([])
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)
    const [isRole, setIsRole] = useState(true)

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = data.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    )

    useEffect(() => {
        getData({
            url: `data_temperatur/${email}/${token}`
        }).then(result => {
            setData(result)
        })
        getData({ url: `me/${email}/${token}` }).then(result => {
            if (result.role !== "Admin") setIsRole(false)
        })

    }, [data])

    const FilterComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('')
            }
        }
        return (
            <Filter
                onFilter={e => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        )
    }, [filterText, resetPaginationToggle])

    const tableHeader = ['No.', 'Nama Peralatan', 'Unit', 'Waktu', 'DE (°C)', 'NDE (°C)', 'Body (°C)', 'Created At', 'Updated At', 'Diinput Oleh']
    const tableBody = filteredItems.map((item, i) => [
        i + 1,
        item.name,
        item.unit,
        new Date(item.date).toLocaleString(),
        item.de,
        item.nde,
        item.body,
        new Date(item.createdAt).toLocaleString(),
        new Date(item.updatedAt).toLocaleString(),
        item.inputBy.name
    ])

    return (
        <div className='m-2 rounded-md'>
            <DataTable
                title="Tabel Data Temperatur"
                columns={COLUMNS_TEMPERATUR(isRole)}
                data={filteredItems}
                pagination
                highlightOnHover
                striped
                actions={(
                    <>
                        <ExportPdf tableBody={tableBody} tableHeader={tableHeader} />
                        <ExportExcel data={filteredItems} />
                    </>
                )}
                fixedHeaderScrollHeight='100vh'
                paginationResetDefaultPage={resetPaginationToggle}
                subHeaderComponent={FilterComponent}
                subHeader
                persistTableHead
            />
        </div>
    )
}


export default TableTemperatur
