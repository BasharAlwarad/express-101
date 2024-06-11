import { NavLink } from 'react-router-dom';

const Nav = () => {

    const linkStyle = ({ isActive }) => 
              isActive ? "text-white bg-red-500 px-3 py-2 rounded" : "text-red-700 hover:bg-red-300 px-3 py-2 rounded"
    
  return (
    <nav className="w-full bg-red-200 p-4">
      <ul className="flex justify-between space-x-4">
        <li>
          <NavLink 
            to="/" 
            className={linkStyle}
            >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/users"
            className={linkStyle}
            >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products"
            className={linkStyle}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
