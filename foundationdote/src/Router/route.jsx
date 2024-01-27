import HomePage from "../Pages/Home/main";
import MainRoot from "../Pages/MainRoot";

export const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            }
        ]
    }
]