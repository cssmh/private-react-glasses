import { Link, useNavigate } from "react-router-dom";
import GetAuth from "../../AuthProvider/GetAuth";
import toast from "react-hot-toast";

const Register = () => {

  const {createUser, updateNamePhoto} = GetAuth()
  const navigateTo = useNavigate()

  const handleRegister = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const img = e.target.img.value
    if(password.length < 6){
      toast.error("Password must at least be 6 character or more")
      return
    }
    createUser(email, password)
    .then(res => {
      console.log(res.user, "success reg");
      updateNamePhoto(name, img)
      .then(toast.success("update name img success also reg"))
      .catch(err => toast.error(err.message))
      navigateTo("/")
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl my-2 font-bold">Register now!</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              doloribus.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    type="text"
                    name="img"
                    placeholder="image url"
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
                </div>
                <div className="form-control mt-4 p-0">
                  <button type="submit" className="btn btn-neutral">
                    Register
                  </button>
                </div>
                <label className="label">
                  Have an account?{" "}
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover text-sm text-green-400"
                  >
                    Please Login
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
