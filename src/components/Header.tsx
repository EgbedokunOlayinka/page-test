import {ReactComponent as UserIcon} from '../assets/user-circle-regular.svg';

const Header = () => {
  return (
    <header>
      <a href="#" className="nav-link">TRIPS</a>
      <a href="#" className="nav-link">RECENTLY VIEWED</a>
      <a href="#" className="nav-link">BOOKINGS</a>
      <UserIcon className='nav-icon' />
    </header>
  )
}

export default Header
