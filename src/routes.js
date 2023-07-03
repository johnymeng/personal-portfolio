import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Projects from './components/test.vue'

export default[
    {
        path: '/', 
        component: Home
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/Contact',
        component: Contact
    },
    {
        path: '/Projects',
        component: Projects
    }
]