import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <>
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-2">Login now!</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              doloribus.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form>
              <div className="card-body pb-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-4 p-0">
                  <button type="submit" className="btn btn-neutral">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <div className="px-8 pb-6">
              <label className="label">
                New here?{" "}
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-sm text-green-400"
                >
                  Create an account
                </Link>
              </label>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
