import { NavLink } from "react-router-dom";

const Header = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='login'>Login</NavLink></li>
        <li><NavLink to='register'>Register</NavLink></li>
       
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}       
                </ul>
            </div>
        </div>
    );
};

export default Header;