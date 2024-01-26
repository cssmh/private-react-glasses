import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import GetAuth from "../../AuthProvider/GetAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const navigateTo = useNavigate();
  const { googlePopupLogin, githubPopupLogin } = GetAuth();
  const handleGooglePopupLogin = () => {
    googlePopupLogin()
      .then((res) => {
        console.log(res.user)
        toast.success("success logged in");
        navigateTo("/");
      })
      .catch((err) => toast.error(err.message));
  };
  const handleGithubPopupLogin = () => {
    githubPopupLogin()
      .then((res) => {
        console.log(res.user)
        toast.success("success logged in");
        navigateTo("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="text-3xl flex justify-center gap-3">
        <button onClick={handleGooglePopupLogin}>
          <FcGoogle />
        </button>
        <button onClick={handleGithubPopupLogin}>
          <FaGithub />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
