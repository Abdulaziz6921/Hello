import { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

function Login() {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setEmail(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  });

  let stl = {
    size: "w-full h-[100vh] text-txt flex flex-col items-center justify-center text-center",
    header: "text-[25px] md:text-[37px] font-bold ",
    container:
      "w-[90%] md:w-[60%] lg:w-[50%] h-fit flex flex-col justify-evenly items-center mt-[20px] mx-auto lg:px-[10px]",
    btn: "w-[150px] h-[50px] md:w-[180px] md:h-[70px] bg-secondary text-[22px]  md:text-[24px] text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border-2 duration-700 hover:duration-700 rounded-md my-[30px]",
  };

  return (
    <>
      {email ? (
        <Home />
      ) : (
        <div className={stl.size}>
          <div className={stl.container} id="shadow">
            <h1 className={stl.header}>Welcome!</h1>
            <h1 className={stl.header}>Login with your Google Account!</h1>
            <button onClick={handleClick} className={stl.btn}>
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
