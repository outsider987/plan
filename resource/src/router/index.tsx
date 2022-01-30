import { useRoutes } from 'react-router-dom'
import React, { } from 'react'
import loadable from 'react-loadable'

const LoadingComponent = () => <h3>please wait...</h3>

const App = loadable({
  loader: () => import('~/App'),
  loading: LoadingComponent
})
const Standard = loadable({
  loader: () => import('~/views/Standard'),
  loading: LoadingComponent
})
const Premium = loadable({
  loader: () => import('~/views/Premium'),
  loading: LoadingComponent
})

function HomeRoute () {
  const element = useRoutes([
    {
      path: '/',
      element: <App />
      // children: [
      //   {
      //     path: 'edit2',
      //     element: <Edit2 />

      //   }
      // ]
    },
    {
      path: 'standard',
      element: <Standard />
    },
    {
      path: 'premium',
      element: <Premium />
    }
  ])

  return element
}
export { HomeRoute }
