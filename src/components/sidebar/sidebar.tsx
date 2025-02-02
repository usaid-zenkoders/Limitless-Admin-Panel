// Utilities

// Next && React

// Assets Imports
import { whiteSvgLogo, LogoutLogo } from "../../../image.constants";
// Component
import Tab from "./tab";

// Constants
// Icons Imports
import { IoIosClose } from "react-icons/io";
import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router";
import { TabProps } from "../../types/auth/dashboard/sidebar";
// import toast from "react-hot-toast";
import { tabs } from "../../constants/sidebar";
import { cn } from "../../lib/utils";

const Sidebar = ({ isOpen, setIsOPen }: TabProps) => {
  const [, , removeCookie] = useCookies(["access_token"]);

  // // const router = useRouter();
  // const handleLogout = () => {
  //   toast("Logout Successfull ", { type: "success" });
  //   removeCookie("access_token");
  // };

  return (
    <div
      className={cn(
        "py-10",
        "!h-screen",
        "custom-transition",
        "flex flex-col justify-between",
        "w-[300px] min-w-[300px] max-w-[300px]",
        "bg-black",
        isOpen ? "absolute lg:relative left-0 top-0 z-50" : "hidden lg:flex"
      )}
    >
      <IoIosClose
        className="absolute lg:hidden right-4 top-4 text-2xl text-white cursor-pointer"
        onClick={() => setIsOPen(false)}
        size={30}
      />

      <div className="space-y-6 over w-full flex flex-col items-center">
        <img
          alt="logo"
          src={whiteSvgLogo}
          width={78}
          height={78}
          className="justify-center"
        />

        <div
          className={`space-y-6 w-[90%] text-base px-4 bg-white rounded-xl `}
        >
          {tabs.map((item, index) => (
            <Tab key={index} {...item} link={item.link} />
          ))}
        </div>
      </div>
      <button className="ml-2 ">
        <Tab icon={LogoutLogo} name="Logout" link="/" isLogoutButton={true} />
      </button>
    </div>
  );
};
export default Sidebar;
