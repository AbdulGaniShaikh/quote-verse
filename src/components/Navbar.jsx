import { Link, NavLink } from 'react-router-dom';
import { hamburger } from '../assets/icons';
import HomeIcon from './HomeIcon';
import LikeIcon from './LikeIcon';

const Navbar = ({ onHamburgerClick }) => {
  return (
    <nav className="fixed flex w-full top-0 left-0 right-0 border-b border-borderColor darkBg">
      <Link
        to="/"
        className="flex gap-1 w-[400px] max-xl:w-[300px] items-center justify-center p-4 text-xl max-lg:hidden"
      >
        <i className="fa-brands fa-threads"></i>
        <p>Quoteverse</p>
      </Link>
      <div className="flex flex-1 items-center justify-evenly p-4 border-x border-borderColor">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-item' : 'inactive-item')}>
          <HomeIcon />
        </NavLink>
        <NavLink to="/liked" className={({ isActive }) => (isActive ? 'active-item' : 'inactive-item')}>
          <LikeIcon />
        </NavLink>
        <img onClick={onHamburgerClick} src={hamburger} alt="" className="cursor-pointer lg:hidden" />
      </div>
      <div className="flex w-[400px] max-xl:w-[300px] items-center justify-end p-4 text-xl max-lg:hidden">
        <img src={hamburger} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
