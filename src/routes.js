import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
// import { CarApp } from './pages/car-app.jsx'
import { GigApp } from './pages/gig-app.jsx'
import { GigDetails } from './pages/gig-details.jsx'
import { AddEditGig } from './pages/add-edit-gig.jsx'
import { UserProfile } from './pages/user-profile.jsx'
import { EditUser } from './pages/edit-user.jsx'
import { Privacy } from './cmps/privacy.jsx'
import { Terms } from './cmps/terms.jsx'
import { Contact } from './cmps/contact.jsx'

// import { ReviewApp } from './pages/review-app.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
// import { AdminApp } from './pages/admin-app.jsx'

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
    // {
    //     path: '/gig/edit/:gigId?',
    //     component: <AddEditGig />
    // },
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

    // {
    //     path: 'review',
    //     component: <ReviewApp />,
    //     label: 'Reviews'
    // },
    // {
    //     path: 'chat',
    //     component: <ChatApp />,
    //     label: 'Chat'
    // },
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
    // {
    //     path: 'admin',
    //     component: <AdminApp />,
    //     label: 'Admin Only'
    // }
]

export default routes;