import React, { useContext } from 'react';
import { FaBookReader, FaHome, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const { data: role = [], refetch,isLoading } = useQuery(['role',user?.email], async () => {
        const res = await fetch(`http://localhost:5000/users/role/${user.email}`)
        return res.json();
    });
    const userRole = role.role;
    console.log(userRole);

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-primary">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-primary text-base-content">
                        {/* Sidebar content here */}

                        {userRole === 'admin' && (<>
                            <li><a>Sidebar Item 1</a></li>
                            <li> <NavLink to="/dashboard/manageuser"><FaUser></FaUser> Manage user</NavLink> </li></>
                        )}
                        {userRole == 'instructor' && (<>
                            <li> <NavLink to="/dashboard/addclass"><FaBookReader></FaBookReader> Add classes</NavLink> </li>
                            <li> <NavLink to="/dashboard/myclass"><FaBookReader></FaBookReader> My classes</NavLink> </li></>
                        )}











                        {/* ------ */}


                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;