import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { action as DeleteAction } from './routes/delete'
import ErrorPage from './errorpage'
import './index.css'
import Contact, { loader as contactLoader,  action as contactAction,} from './routes/contact'
import EditContact, {action as EditAction} from './routes/edit'
import Root, { loader as rootLoader, action as rootAction, action } from "./routes/root";
import Index from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    loader: rootLoader,
    action: action,
    children: [{
         elementError: <ErrorPage/>,
      children: [{
        index: true, 
        element: <Index />},
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      { 
      path: "contacts/:contactId/edit",
      element: <EditContact />,
      loader: contactLoader,
      action: EditAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: DeleteAction,
      }
    ]
    }
   
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
