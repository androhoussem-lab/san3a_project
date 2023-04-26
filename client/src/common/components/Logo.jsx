import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="font-merriweather text-red italic text-2xl lg:text-3xl xl:text-4xl hover:scale-[1.1] transition-all duration-300"
    >
      San<span className="text-green font-merriweather font-bold">3</span>a
    </Link>
  );
};

export default Logo;
