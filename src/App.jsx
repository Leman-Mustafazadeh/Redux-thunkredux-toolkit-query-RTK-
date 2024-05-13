import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import {  routes } from './routes/routes'

function App() {
  const route = createBrowserRouter(routes)

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
