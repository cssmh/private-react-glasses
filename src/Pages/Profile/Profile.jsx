import GetAuth from "../../AuthProvider/GetAuth";

const Profile = () => {
  const { user } = GetAuth();

  return (
    <div className="text-center">
      <h1 className="text-xl">HI, {user?.displayName}</h1>
      <p>{user.email ? user.email : "not available email"}</p>
      <img className="w-24 mx-auto rounded-xl" src={user?.photoURL} alt="" />
    </div>
  );
};

export default Profile;
