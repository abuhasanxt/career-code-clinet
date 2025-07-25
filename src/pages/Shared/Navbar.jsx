import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user,singOut } = use(AuthContext);

  const handleSingOut=()=>{
    singOut()
    .then(()=>{
      console.log('Sing Out user');
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Sing Out Successful",
  showConfirmButton: false,
  timer: 1500
});
    })
    .catch(error=>{
      console.log(error);
    })
  }
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
{/* for applicant links check roles as well */}
      {
        user && <>
         <li>
        <NavLink to="/myApplication">My Applications</NavLink>
      </li>
        </>
      }

      {/* for recruiter check role as well */}
      {
        user && <>

          <NavLink to="/addJob">Add Job</NavLink>
          <NavLink to="/myPostedJobs">My POsted Job</NavLink>
        </>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSingOut} className="btn">Sing Out</button>
        ) : (
          <>
            <NavLink to="/register" className="btn">
              Register
            </NavLink>
            <NavLink to="/singIn" className="btn">
              Sing In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
