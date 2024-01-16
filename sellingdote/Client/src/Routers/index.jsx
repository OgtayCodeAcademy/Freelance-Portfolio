import AddPage from "../Pages/Add";
import DetailPage from "../Pages/DetailPage";
import HomePage from "../Pages/Home";
import UserRoot from "../Pages/UserRoot";
import WishlistPage from "../Pages/Wishlist";

export const ROUTES = [
    {
        path: '/',
        element: <UserRoot/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/products/add',
                element: <AddPage/>
            },
            {
                path: ':id',
                element: <DetailPage/>
            },
            {
                path: '/wishlist',
                element: <WishlistPage/>
            }
        ]
    }
]