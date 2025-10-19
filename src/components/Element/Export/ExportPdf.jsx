import React from 'react'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

const ExportPdf = ({ tableBody, tableHeader }) => {

    const exportPDF = () => {
        const doc = new jsPDF();
        autoTable(doc, {
            head: [tableHeader],
            body: tableBody
        });
        doc.save('data_temperatur.pdf');
    }

    return (
        <button className='btn btn-sm btn-error' onClick={exportPDF}>Export PDF</button>
    )
}

export default ExportPdf
