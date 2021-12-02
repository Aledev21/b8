import { IProduct } from "../../mock/api";
import { useState } from "react";
import Vector from "../../assets/Vector.svg";
import { Button } from "../Button";

type Props = IProduct;

export const Card = (props: Props) => {
  const [disable, setDisable] = useState<boolean>(false);
  const toogleDisable = () => setDisable(!disable);

  return (
    <div className="bg-white p-8 rounded-lg max-w-1/4 max-h-2/4 relative ">
      <div>
        <Button />
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
          em até
          <span className="text-black">10x de R$ {props.priceDescription}</span>
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
