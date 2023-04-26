import { Link } from "react-router-dom";
import Card from "../common/components/Card";
//after is comming from api

const PopularProducts = ({ popularProducts }) => {
  const popularProductsList = popularProducts.map((product) => {
    return <Card key={product.id} product={product} />;
  });
  return (
    <section className="w-full px-2 py-2 sm:px-6 md:px-8 lg:px-16 flex flex-col justify-center items-center">
      {/*Title*/}
      <div className="w-full flex items-center justify-between py-8">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">
          Produits populaires
        </h2>
        <Link
          to="popular"
          className="text-center text-base md:text-lg lg:text-xl text-gray-700"
        >
          Plus
        </Link>

        {/*products list*/}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularProductsList}
      </div>
    </section>
  );
};

export default PopularProducts;
