import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Routes } from "./Routers"

const router = createBrowserRouter(Routes)
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
