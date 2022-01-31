import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import routes from './routes'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { ScrollToTop } from './cmps/scroll-to-top'
// import { UserDetails } from './pages/user-details'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <AppHeader />
                    <main>
                        <ScrollToTop />
                        <Routes>
                            {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
                            {/* <Route path="user/:id" element={<UserDetails />} /> */}
                        </Routes>
                    </main>
                    <AppFooter />
                </BrowserRouter>
            </div>
        )
    }
}


