import AppLoaderFix from '@/components/AppLoaderFix'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div className="relative bg-[#f3f3f3] min-h-screen">
            <Suspense fallback={<AppLoaderFix />}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default AppLayout