import { Homepage, About, Documentation } from '../views/pages';

export const routeProps = [
    {
        page: "Home",
        path: "/",
        component: (props) => <Homepage {...props} />,
        subPages: [],
    },
    {
        page: "About",
        path: "/about",
        component: (props) => <About {...props} />,
        subPages: [],
    },
    {
        page: "Documentation",
        path: "/documentation", 
        component: (props) => <Documentation {...props} />,
        subPages: [],
    }
]