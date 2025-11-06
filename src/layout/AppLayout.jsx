import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import AppLoader from '../components/AppLoader'

const AppLayout = () => {
    return (
        <div className="relative bg-[#f3f3f3] min-h-screen">
            <Suspense fallback={<AppLoader />}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default AppLayout