// Assets
import { cn } from "../../lib/utils";
import Button from "./button";
// import Image from "next/image";

interface Props {
  onView: () => void;
  title?: string;
  isRed?: boolean;
  isIcon?: boolean;
}

const Actions = ({ onView }: Props) => {
  return (
    <div className="flex  justify-end">
      <Button
        text="View"
        onClick={onView}
        className={cn(
          "justify-center",
          "rounded-lg",
          "py-4",
          "w-[58px] h-[36px]",
          "bg-black text-white",
          "text-[16px] font-medium"
        )}
      />
    </div>
  );
};

export default Actions;
