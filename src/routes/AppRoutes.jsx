import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from '@/layout/AppLayout';
const TradePage = lazy(() => import("@/pages/trade/TradePage"));
const MarketsPage = lazy(() => import("@/pages/market/MarketsPage"));
const PositionsPage = lazy(() => import("@/pages/positions/PositionsPage"));

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<MarketsPage />} />
                <Route path="/trade/:marketSymbol" element={<TradePage />} />
                <Route path="/positions" element={<PositionsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}