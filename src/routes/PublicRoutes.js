import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout = React.lazy(() => import('./Layout/Layout'));
const Home = React.lazy(() => import('../pages/Home/Home'));
const Weather = React.lazy(() => import('../pages/Weather/Weather'));
const NotFound = React.lazy(() => import('../pages/NotFound/NotFound'));

function PublicRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/weather" element={<Weather />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default PublicRoutes;
