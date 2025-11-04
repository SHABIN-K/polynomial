import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import TopNavBar from '@/Components/TopNavBar'
import AppLoader from '@/Components/AppLoader'
import BottomNavBar from '@/Components/BottomNavBar'

const AppLayout = () => {
    return (
        <div className="relative bg-[#f3f3f3] min-h-screen">
            <TopNavBar />
            <div className="py-16">
                <Suspense fallback={<AppLoader />}>
                    <Outlet />
                </Suspense>
            </div>
            <BottomNavBar />
        </div>
    )
}

export default AppLayout