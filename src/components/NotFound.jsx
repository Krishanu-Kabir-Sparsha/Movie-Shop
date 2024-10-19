import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    // <div>NotFound</div>
    <NavLink className={'font-semibold underline text-blue-500'} to={"/"}>Back</NavLink>
  )
}
