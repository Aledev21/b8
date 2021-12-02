import { useState } from "react";
import coracao15 from "../../assets/coracao15.svg";

export const Button = () => {
  const [disable, setDisable] = useState<boolean>(false);
  const toogleDisable = () => setDisable(!disable);

  return (
    <div className="">
      {" "}
      <button
        className={`   transition-all duration-500 hover:bg-red-500 w-12 h-12 text-right absolute right-5 rounded-full bg-gray-50  flex items-center justify-center ${
          disable && "bg-red-700"
        }`}
        onClick={toogleDisable}
        type="button"
      >
        {" "}
        <img className="w-7 h-7      " src={coracao15} alt="" />
      </button>
    </div>
  );
};
