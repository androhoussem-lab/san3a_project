import { useParams } from "react-router-dom";
//is comming from api
import products from "../utils/products";
import { Link } from "react-router-dom";
import {
  BsFillStarFill,
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsPhone,
} from "react-icons/bs";
//is comming from api
import person from "../assets/images/person.webp";

const ProductDetail = () => {
  const { id } = useParams(); //type string
  //After is comming from api
  const product = products.find((product) => product.id == id);
  return (
    <section className="w-full pt-32 pb-16 px-2 sm:px-6 md:px-8 lg:px-16">
      <div className="w-full flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center md:flex-row gap-8">
          <div className="flex-1 relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full"
            />
            <div className="absolute top-4 left-4 text-yellow flex justify-center items-center gap-2">
              <h2>{product.rating.rate}</h2>
              <span className="w-2 text-yellow">
                <BsFillStarFill />
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start gap-8">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-700 md:flex-1 text-start font-semibold">
                {product.title}
              </h2>
              <h2 className="text-red text-end md:text-xl font-bold">
                {product.price}DA
              </h2>
            </div>
            <p className="text-gray-500 text-sm md:text-base text-start">
              {product.description}
            </p>
            <div className="flex justify-start items-center gap-4">
              <h2 className="text-gray-500 text-sm md:text-base text-start">
                Catégorie:
              </h2>
              <Link to="/" className="text-green font-semibold">
                {product.category}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex flex-col md:flex-row justify-between items-center mt-32 gap-4 bg-yellow rounded-lg">
          <div className="flex-1 flex justify-center items-center">
            <img src={person} alt="" className="w-40 h40 rounded-full" />
          </div>
          <div className="flex-1 flex flex-col justify-between items-center gap-4">
            <h2 className="w-full text-background md:text-3xl text-center font-bold">
              Houssem Benseghir market
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-start items-center gap-2">
                <span className="text-gray-600">
                  <BsPhone />
                </span>
                <p className="text-gray-500 text-sm md:text-base text-start">
                  +213 775130807
                </p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-gray-600">
                  <BsWhatsapp />
                </span>
                <p className="text-gray-500 text-sm md:text-base text-start">
                  +213 775130807
                </p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-gray-600">
                  <BsFacebook />
                </span>
                <p className="text-gray-500 text-sm md:text-base text-start">
                  https://facebook.com
                </p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <span className="text-gray-600">
                  <BsInstagram />
                </span>
                <p className="text-gray-500 text-sm md:text-base text-start">
                  https://instegram.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
