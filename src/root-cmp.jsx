import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import routes from './routes'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'


export function RootCmp() {


    return (
        <div>
            <BrowserRouter>
                <AppHeader />
                <main>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
                    </Routes>
                </main>
                <AppFooter />
            </BrowserRouter>
        </div>
    )
}



