import ContactPage from "../User/Contact";
import HomePage from "../User/Home/main";
import UserRoot from "../User/UserRoot";

export const Routes = [
    {
        path: '/',
        element: <UserRoot/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            }
        ]
    }
]