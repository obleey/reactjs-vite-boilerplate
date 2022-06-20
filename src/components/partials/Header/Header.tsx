import { FC } from 'react'
import { Link } from '@tanstack/react-location'

const Header: FC = () => {
  return (
    <header className="flex flex-row items-center w-full h-7">
      <Link to="/login">login</Link>
      <Link to="/signup">register</Link>
      <Link to="/profile">profile</Link>
      <Link to="/">home</Link>
    </header>
  )
}

export default Header
