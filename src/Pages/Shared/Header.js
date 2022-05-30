import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { UserCircleIcon } from '@heroicons/react/solid'


const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItem = <>
        <li className='text-white'><Link as={Link} to="/">Home</Link></li>
        <li className='text-white'><Link as={Link} to="/products">Products</Link></li>
        <li className='text-white'><Link as={Link} to="/purchase">Purchase</Link></li>
        <li className='text-white'><Link as={Link} to="/order">My Order</Link></li>
        {
            user && <li><Link className='text-white' as={Link} to="dashboard">Dashboard</Link></li>
        }
        <li className='text-white'>
            {user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link as={Link} to="login">Login</Link>}
        </li>

    </>

    return (
        <div>
            <div className=" navbar bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <a className="text-white btn btn-ghost normal-case text-xl">Atlas Machinery</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>


                <div className="navbar-end lg:flex">
                    <ul className="menu menu-horizontal p-0">


                        <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        {user ? <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label> : <UserCircleIcon className="w-12 rounded-full  text-gray-400" />}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Header;