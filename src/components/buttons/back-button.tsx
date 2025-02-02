// React & next Imports
import { useNavigate } from "react-router";
// Icon Import
import { IoArrowBack } from "react-icons/io5";

interface BackButtonProps {
  link?: string;
}

const BackButton = ({ link }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (link) navigate(link);
    else navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="flex gap-x-1 cursor-pointer items-center"
    >
      <IoArrowBack size={20} color="#667085" />
      <p className="text-text-primary text-base">Back</p>
    </button>
  );
};

export default BackButton;
