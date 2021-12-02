import { IProduct } from "../../mock/api";
import { useState } from "react";
import Vector from "../../assets/Vector.svg";
import coracao1 from "../../assets/coracao1.svg";
import coracao2 from "../../assets/coracao2.svg";
import coracao3 from "../../assets/coracao3.svg";
import coracao4 from "../../assets/coracao4.svg";

type Props = IProduct;

export const Card = (props: Props) => {
  const [disable, setDisable] = useState<boolean>(false);
  const toogleDisable = () => setDisable(!disable);
  const styleButton = { fill: "#09f" };
  return (
    <div className="bg-white p-8 rounded-lg max-w-1/4 max-h-2/4 relative ">
      <div className="icone-favorito">
        <img
          style={styleButton}
          className="w-12 h-12 text-right absolute right-5 "
          src={coracao1}
          alt=""
        />
      </div>
      <div>
        <img
          className="w-60 h-60 mb-8 "
          src="https://media.discordapp.net/attachments/915635710671863808/915653831373770833/image.png"
          alt=""
        />
        <p className="text-sm leading-5 font-medium  mb-7">
          {props.description}
        </p>
      </div>
      <div>
        <p className="text-base text-gray-400 line-through">
          R$ {props.previousPrice}
        </p>
        <p className=" text-xl text-red-600">R$ {props.price} </p>
        <p className="text-xs mt-1 text-gray-400">
          em até{" "}
          <span className="text-black">
            10x de R$ {props.priceDescription}{" "}
          </span>
          sem juros
        </p>
      </div>
      <div className="mt-7">
        <button
          type="button"
          className=" flex flex-row justify-center items-center	 bg-corapenas rounded py-3 w-full text-base text-white font-bold hover:bg-green-800  disabled:bg-corapenas2 disabled:text-black"
          disabled={disable}
          onClick={toogleDisable}
        >
          {disable && <img className="mr-4" src={Vector} alt="" />}
          {!disable ? "Adicionar" : "Adicionado"}
        </button>
      </div>
    </div>
  );
};
