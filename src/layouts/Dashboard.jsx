import React, { useContext } from 'react';
import { FaBookReader, FaHome, FaUser } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useRole from '../hooks/useRole';
import logo from '../assets/logo/favicon.png'

const Dashboard = () => {
    const [role] = useRole();

    // const { user } = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
    // // console.log(user);
    // const { data: role = [], refetch,isLoading } = useQuery(['role',user?.email], async () => {
    //     const res = await axiosSecure(`users/role/${user.email}`)
    //     return res.data;
    // });
    const userRole = role.role;
    // console.log(userRole);

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
                        <div className='flex mb-8'>
                            <Link to="/"><img src={logo} alt="" className='h-50 w-50' /></Link>
                        </div>
                        {/* Sidebar content here */}

                        {userRole == 'admin' && (<>
                            <li> <NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink> </li>
                            <li> <NavLink to="/dashboard/manageuser"><FaUser></FaUser> Manage user</NavLink> </li>
                            <li> <NavLink to="/dashboard/manageclasses"><FaUser></FaUser> Manage Classes</NavLink> </li>
                        </>
                        )}
                        {userRole == 'instructor' && (<>
                            <li> <NavLink to="/dashboard/instuctorhome"><FaHome></FaHome> Instructor Home</NavLink> </li>
                            <li> <NavLink to="/dashboard/addclass"><FaBookReader></FaBookReader> Add classes</NavLink> </li>
                            <li> <NavLink to="/dashboard/myclass"><FaBookReader></FaBookReader> My classes</NavLink> </li></>
                        )}
                        {userRole == 'student' && (<>
                            <li> <NavLink to="/dashboard/studenthome"><FaHome></FaHome> Student Home</NavLink> </li>
                            <li> <NavLink to="/dashboard/selectedclass"><FaBookReader></FaBookReader> My selected classes</NavLink> </li>
                            <li> <NavLink to="/dashboard/myclass"><FaBookReader></FaBookReader> My classes</NavLink> </li>
                            </>
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