import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const BuyForm = ({ setActiveState, getSizeAndLink }) => {
  const size = ["S", "M", "L", "XL", "XXL", "XXXL"];

  const [selectedSize, setSelectedSize] = useState(size[0]);
  const [nftUrl, setNftUrl] = useState("");

  var expression =
    "https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,}";

  var regex = new RegExp(expression);

  

  const submitHandler = (e) => {
    e.preventDefault();

    const isvalid = regex.test(nftUrl);

    {
      isvalid == false ? alert("Enter the valid URL") : setActiveState(1);
    }

    getSizeAndLink(nftUrl, selectedSize);
    
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className=" mt-5">
          <label htmlFor="size">
            <h1 className=" text-slate-600 font-bold text-xl dark:text-slate-50">
              Size ({selectedSize})
            </h1>
          </label>
          <div className=" py-3 -ml-1">
            {size.map((sizes) => (
              <button
                onClick={() => setSelectedSize(sizes)}
                className={`border-[3px] ${
                  sizes === selectedSize
                    ? "border-red-600 text-red-600 dark:text-red-600 dark:border-red-600"
                    : "text-slate-500/50"
                } font-semibold rounded-lg py-1 px-3 lg:text-lg mx-1 dark:text-slate-500 dark:border-slate-500 `}
              >
                {sizes}
              </button>
            ))}
          </div>

          <label htmlFor="size">
            <h1 className=" text-slate-600 font-bold text-xl dark:text-slate-50">
              NFT Link
            </h1>
          </label>
          <input
            type="text"
            name="link"
            value={nftUrl}
            onChange={(e) => setNftUrl(e.target.value)}
            required
            placeholder="Enter nft link"
            className=" focus:border-red-500 bg-transparent border-[3px] mt-2 p-2 w-full rounded-lg dark:border-slate-500 dark:focus:border-red-500"
          />
          <button
            type="submit"
            className=" scale-100 hover:scale-105 p-[9px] text-slate-50 bg-red-600 hover:bg-red-700 cursor-pointer font-semibold rounded-xl w-full text-center mt-5 text-lg"
          >
            BUY NOW
          </button>
        </div>
      </form>
    </>
  );
};

export default BuyForm;
