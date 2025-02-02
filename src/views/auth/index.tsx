import SignInView from "../../components/auth/loginForm";
import { LoginScreenLogo } from "../../../image.constants";

function Login() {
  return (
    <div className="flex h-screen w-full bg-black md:bg-white justify-start">
      <div className="hidden md:flex md:w-[60%] h-screen bg-black justify-center items-center">
        <img
          src={LoginScreenLogo}
          alt="Logo"
          className="w-[236px] h-[236px]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-[40%] p-4 h-full ">
        <div className="md:hidden flex gap-4 justify-center items-center mb-6">
          <img
            src="assets/white-logo.svg"
            alt="Logo"
            className="w-[69px] h-[69px]"
          />
          <h1 className="text-white text-4xl">Limitless</h1>
        </div>

        <div className="w-full rounded-lg p-6">
          <SignInView />
        </div>
      </div>
    </div>
  );
}

export default Login;
