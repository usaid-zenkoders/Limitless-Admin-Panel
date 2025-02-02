interface IProps {
  name: string;
  icon: string;
  link: string;
  isLogoutButton?: boolean;
}
const Tab = ({ icon, name, link, isLogoutButton }: IProps) => {
  // const path = window.location.pathname;
  // const isActive = path.includes(link);

  return (
    <a
      href={link}
      className={`flex cursor-pointer gap-x-3 items-center  max-w-[240px] py-2 rounded-xl`}
    >
      <img
        alt={name}
        src={icon}
        width={24}
        height={24}
        className={`${isLogoutButton ? "ml-4" : ""}`}
      />
      <h1
        className={` ${isLogoutButton ? "text-white" : "text-lg text-black font-medium"}`}
      >
        {name}
      </h1>
    </a>
  );
};

export default Tab;
