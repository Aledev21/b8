import coracao15 from "../../assets/coracao15.svg";

export const Button = () => {
  return (
    <div className="hover:bg-corbutton w-12 h-12 text-right absolute right-5 bg-white rounded-full flex">
      <div className="object-center justify-center">
        <img
          className="rounded-t-none m-0 object-center	pt-3.5 pl-2.5"
          src={coracao15}
          alt=""
        />
      </div>
    </div>
  );
};
