import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    logOut();
  };

  return (
    <div>
      <div>
        <div className="navbar  container mx-auto     bg-opacity-50 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu container mx-auto menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link> MY ADDMISION</Link>
                </li>
                <li>
                  <a>COLLEGE</a>
                </li>
                <li>
                  <a href="/">Item 3</a>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl font-mono font-extrabold text-indigo-500 "
            >
              EDUCATION MASTER
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">COLLEGE</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary> ADDMISION</summary>
                  <ul className="p-2"></ul>
                </details>
              </li>

              <li>
                <Link to="/">MY COLLEGE</Link>
              </li>
              <li>
                <Link to="/">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                {user.displayName}{" "}
                <div className="">
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm bg-primary hover:bg-white mx-10"
                  >
                    {" "}
                    Logout
                  </button>
                </div>{" "}
              </>
            ) : (
              <Link to="/login" className="btn">
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
