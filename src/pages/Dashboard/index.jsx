import MenuLayout from '@/components/Layouts/MenuLayout'
import DashboardChart from '@/components/Modules/Dashboard/DashboardChart';
import DashboardStats from '@/components/Modules/Dashboard/DashboardStats'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';


function Dashboard() {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, [])

    return (
        <MenuLayout title="Dashboard">
            <Helmet>
                <title>SIOSA - Dashboard</title>
            </Helmet>
            <div className='w-full bg-white h-full p-2 my-2 rounded-md'>
                <div className='flex justify-end gap-2'>
                    <p>
                        {dateState.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </p>
                    <p className='text-indigo-700'>
                        {dateState.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                            second: 'numeric'
                        })}
                    </p>
                </div>
                <DashboardStats />
                <DashboardChart />
            </div>
        </MenuLayout>

    )
}

export default Dashboard
