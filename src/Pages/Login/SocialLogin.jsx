import { FcGoogle } from "react-icons/fc";
import GetAuth from "../../AuthProvider/GetAuth";
const SocialLogin = () => {

  const {googlePopupLogin} = GetAuth()
  const handleGooglePopupLogin = () => {
    googlePopupLogin()
    .then(res => {
      console.log(res.user, "success logged in")
    })
    .catch(err => console.log(err.message))
  }

  return (
    <>
      <div className="divider">continue with</div>
      <div className="text-3xl flex justify-center">
        <button onClick={handleGooglePopupLogin}>
          <FcGoogle />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
