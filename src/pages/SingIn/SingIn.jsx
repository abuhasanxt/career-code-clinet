import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContexts/AuthContext";
import singIn from "../../assets/lotties/singin.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const SingIn = () => {
  const { singInUser } = use(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state || '/';

  const handleSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Sing In User
    singInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sing In successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>

        <Lottie
          style={{ width: "300px" }}
          animationData={singIn}
          loop={true}
        ></Lottie>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sing In now!</h1>
            <form onSubmit={handleSingIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sing In</button>
              </fieldset>
            </form>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
