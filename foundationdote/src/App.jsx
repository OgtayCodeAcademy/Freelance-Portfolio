import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ROUTES} from './Router/route.jsx'
import './grid.css'

const router = createBrowserRouter(ROUTES)
function App() {


  return (
    <>
     <RouterProvider router={router}>
      <App/>
     </RouterProvider>
    </>
  )
}

export default App
