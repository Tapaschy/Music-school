import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/favicon.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navli = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to="/alltoys">All Toys</NavLink></li>
        {
            user ? <><li><NavLink to="/mytoys">My Toys</NavLink></li>
                <li><NavLink to="/addatoy">Add A Toy</NavLink></li></> : <></>
        }
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
    return (
        <div className='bg-primary fixed top-0 z-50 w-full '>
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
                            </label><Link onClick={handleLogout} className="btn btn-primary">Log out</Link></> : <Link to={"/login"} className="btn btn-primary">Login</Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;