import { ReactLocation, Route } from '@tanstack/react-location'

export const location = new ReactLocation()

export const routes: Route[] = [
  // Public Routes
  {
    path: '/',
    element: () =>
      import('pages/Home/Home').then((module) => <module.default />)
  },
  {
    path: '/login',
    element: () =>
      import('pages/Login/Login').then((module) => <module.default />)
  },
  {
    path: '/signup',
    element: () =>
      import('pages/Register/Register').then((module) => <module.default />)
  },
  {
    //Restricted routes
    path: '/profile',
    element: () =>
      import('pages/Profile/Profile').then((module) => <module.default />)
  },
  // 404 Error
  {
    path: '*',
    element: () =>
      import('pages/Page404/Page404').then((module) => <module.default />)
  }
]
