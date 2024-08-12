import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='text-xl font-semibold'>
        <div className="flex gap-1">
        <IoIosArrowBack className="mt-1"/>
        <span>Home</span>
        </div>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Get in Touch
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
