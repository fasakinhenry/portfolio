import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Landing, NotFound } from './pages';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<NotFound />} />
        </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
