import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/favicon.png'
import useRole from '../../hooks/useRole';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    const [role] = useRole();
    const userRole = role.role;

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
        document.body.classList.toggle('bg-black');
    };


    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navli = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to="/classes">All classes</NavLink></li>
        {/* {
            user ? <><li><NavLink to="/dashboard">Dashboard</NavLink></li></> : <></>
        } */}
        {userRole == 'admin' && (<>
            <li> <NavLink to="/dashboard/adminhome"> Dashboard</NavLink> </li>
        </>
        )}
        {userRole == 'instructor' && (<>
            <li> <NavLink to="/dashboard/instuctorhome"> Dashboard</NavLink> </li>
        </>
        )}
        {userRole == 'student' && (<>
            <li> <NavLink to="/dashboard/studenthome"> Dashboard</NavLink> </li>
        </>
        )}

        <li><NavLink to="/instructors">Instructor</NavLink></li>
    </>
    return (
        <div className='bg-primary dark:bg-black fixed top-0 z-50 w-full '>
            <div className='container mx-auto'>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact z-10 bg-primary dropdown-content mt-3 p-2 text-white rounded-box w-52">
                                {navli}
                            </ul>
                        </div>
                        <a href=""><img src={logo} alt="" className='h-30 w-50' /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white">
                            {navli}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        {
                            user ? <><label className="btn btn-ghost btn-circle avatar tooltip tooltip-left tooltip-secondary" data-tip={user?.displayName}>
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label><Link onClick={handleLogout} className="btn dark:bg-black  btn-primary">Log out</Link></> : <Link to={"/login"} className="btn dark:bg-black btn-primary">Login</Link>
                        }
                        <button className="btn  dark:bg-black  btn-primary hidden md:flex md:ms-2" onClick={toggleTheme}> {darkMode ? <>Light</> : <>Dark</>} </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;