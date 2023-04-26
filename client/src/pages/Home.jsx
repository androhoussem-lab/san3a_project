import FeaturedProducts from "../modules/FeaturedProducts";
import Hero from "../modules/Hero";
import PopularProducts from "../modules/PopularProducts";
import SponsoredProducts from "../modules/SponsoredProducts";
import Banner from "../modules/Banner";
import products from "../utils/products";

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <PopularProducts popularProducts={products} />
      <Banner />
      <FeaturedProducts featuredProducts={products} />
      <SponsoredProducts sponsoredProducts={products} />
    </main>
  );
};

export default Home;
