import { useContext } from "react";
import { BsFillCartFill, BsFillEyeFill, BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const handleAddToCartButton = () => {};

  //TODO: customize card design
  return (
    <div className="relative overflow-hidden max-h-92 group flex flex-col justify-between items-start">
      <img
        className="h-full md:h-[12rem] w-full"
        src={product.image}
        alt="product"
      />
      <div className="w-full px-2 pb-2 flex flex-col justify-evenly items-start">
        <div className="w-full flex justify-between items-center">
          <h2 className="w-full text-gray-700 md:flex-1 text-start font-semibold">
            {product.title.length >= 20
              ? `${product.title.slice(0, 20)}...`
              : product.title}
          </h2>
          <h2 className="text-red md:flex-1 text-end md:text-xl font-bold">
            {product.price}DA
          </h2>
        </div>
        <Link to="/" className="text-green font-semibold">
          {product.category}
        </Link>
        <p className="w-full text-gray-500 text-sm md:text-base text-start">
          {product.description.slice(0, 50)}...
        </p>
        <div className="absolute top-2 left-2 text-yellow flex justify-center items-center gap-2">
          <h2>{product.rating.rate}</h2>
          <span className="w-2 text-yellow">
            <BsFillStarFill />
          </span>
        </div>

        <div className="flex flex-col justify-center items-center scale-100 md:scale-0 absolute top-4 right-0  md:-right-4 group-hover:right-0 group-hover:scale-100 transition-all duration-200 bg-background rounded-tl-lg rounded-bl-lg">
          <Link
            to={`product/${product.id}`}
            className="bg-green p-2 text-background rounded-tl-lg"
          >
            <BsFillEyeFill />
          </Link>
          <button
            className="bg-red p-2 text-background rounded-bl-lg"
            onClick={handleAddToCartButton}
          >
            <BsFillCartFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
