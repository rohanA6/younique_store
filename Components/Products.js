import { urlFor } from "../lib/client";

const Products = ({ product: { image, name, slug, price } }) => {
  return (
    <>
      <div>
        <div className=" my-5 mx-2 lg:mx-10 scale-100 hover:scale-105 ease-in duration-200">
          <img className=" bg-neutral-200 ease-in duration-200 hover:bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 cursor-pointer rounded-2xl h-40 lg:h-80 w-auto p-1 overflow-hidden" src={urlFor(image && image[0])}/>
          <h4 className=" text-slate-800 text-xl lg:text-2xl">{name}</h4>
          <p className=" font-extrabold text-lg">₹{price}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
