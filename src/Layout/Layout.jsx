import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCMP from '../components/NavbarCMP'
import MoviesPage from '../page/MoviesPage'

export default function Layout() {
  return (
    <div>
        <NavbarCMP/>
        <Outlet/>
        {/* <MoviesPage/> */}
        <footer>Footer</footer>
    </div>
  )
}
