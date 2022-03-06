import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { GigApp } from './pages/gig-app.jsx'
import { GigDetails } from './pages/gig-details.jsx'
import { AddEditGig } from './pages/add-edit-gig.jsx'
import { UserProfile } from './pages/user-profile.jsx'
import { EditUser } from './pages/edit-user.jsx'
import { Privacy } from './cmps/privacy.jsx'
import { Terms } from './cmps/terms.jsx'
import { Contact } from './cmps/contact.jsx'



// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,

    },
    {
        path: '/explore',
        component: <GigApp />,

    },
    {
        path: '/add',
        component: <AddEditGig />
    },
    {
        path: '/gig/:gigId',
        component: <GigDetails />
    },
    {
        path: '/profile/',
        component: <UserProfile />
    },
    {
        path: '/profile/edit',
        component: <EditUser />
    },
    {
        path: 'about',
        component: <AboutUs />

    },
    {
        path: 'privacy',
        component: <Privacy />

    },
    {
        path: 'terms',
        component: <Terms />

    },
    {
        path: 'contact',
        component: <Contact />

    },
]

export default routes;