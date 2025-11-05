import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import AppLoader from '@/components/AppLoader'

const AppLayout = () => {
    return (
        <div className="relative bg-[#f3f3f3] min-h-screen">
            <div className="py-16">
                <Suspense fallback={<AppLoader />}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}

export default AppLayout