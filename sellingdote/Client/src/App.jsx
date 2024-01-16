import { ROUTES } from "./Routers"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(ROUTES)
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
