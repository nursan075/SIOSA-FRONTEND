import { emailStorageAtom, tokenStorageAtom } from '@/jotai/atoms'
import { getData } from '@/Utils/getData'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts"

const DashboardChart = () => {
    const [dataTemp, setDataTemp] = useState([])
    const [email,] = useAtom(emailStorageAtom)
    const [token,] = useAtom(tokenStorageAtom)

    useEffect(() => {
        getData({ url: `data_temperatur/${email}/${token}` }).then(result => setDataTemp(result))
    }, [])

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Mengelompokkan data berdasarkan bulan
    const dataByMonth = dataTemp.reduce((acc, item) => {
        const date = new Date(item.date);
        const month = date.getMonth();
        const monthName = monthNames[month];

        if (acc[monthName]) {
            acc[monthName] += 1;
        } else {
            acc[monthName] = 1;
        }

        return acc;
    }, {});

    // Menyimpan jumlah data untuk setiap bulan ke dalam variabel
    const januaryCount = dataByMonth["January"] || 0;
    const februaryCount = dataByMonth["February"] || 0;
    const marchCount = dataByMonth["March"] || 0;
    const aprilCount = dataByMonth["April"] || 0;
    const mayCount = dataByMonth["May"] || 0;
    const juneCount = dataByMonth["June"] || 0;
    const julyCount = dataByMonth["July"] || 0;
    const augustCount = dataByMonth["August"] || 0;
    const septemberCount = dataByMonth["September"] || 0;
    const octoberCount = dataByMonth["October"] || 0;
    const novemberCount = dataByMonth["November"] || 0;
    const decemberCount = dataByMonth["December"] || 0;


    const optionsPie = {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sept", "Okt", "Des"]
    }
    const seriesPie = [januaryCount, februaryCount, marchCount, aprilCount, mayCount, juneCount, julyCount, augustCount, septemberCount, octoberCount, novemberCount, decemberCount]
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sept", "Okt", "Des"]
        }
    }
    const series = [
        {
            name: "Total Data",
            data: [januaryCount, februaryCount, marchCount, aprilCount, mayCount, juneCount, julyCount, augustCount, septemberCount, octoberCount, novemberCount, decemberCount]
        }
    ]

    return (
        <div className='flex-wrap lg:flex gap-0 mt-4 w-full border border-slate-200 p-2 items-center rounded-xl'>
            <div className='flex-1 lg:w-[60%]'>
                <Chart
                    options={options}
                    series={series}
                    width='80%'
                    type='bar'
                />
            </div>
            <div className='w-[80%] lg:w-[30%]'>
                <Chart
                    options={optionsPie}
                    series={seriesPie}
                    width="100%"
                    type="donut"
                />
            </div>
        </div>
    )
}

export default DashboardChart
