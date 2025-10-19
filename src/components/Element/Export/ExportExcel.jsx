import React from 'react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'


const ExportExcel = ({ data }) => {
    const exportExcel = () => {
        const header = ['No.', 'Nama Peralatan', 'Unit', 'Waktu', 'DE (°C)', 'NDE (°C)', 'Body (°C)', 'Created At', 'Updated At', 'Diinput Oleh'];

        const body = data.map((item, i) => [
            i + 1,
            item.name,
            item.unit,
            new Date(item.date).toLocaleString(),
            item.de,
            item.nde,
            item.body,
            item.createdAt.toLocaleString(),
            item.updatedAt.toLocaleString(),
            item.inputBy.name
        ]);

        const worksheetData = [header, ...body];

        const worksheet = XLSX.utils.aoa_to_sheet(worksheetData)

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data Temperatur');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, 'data_temperatur.xlsx');
    }

    return (
        <button className='btn btn-sm btn-success' onClick={exportExcel}>Export Excel</button>
    )
}

export default ExportExcel
