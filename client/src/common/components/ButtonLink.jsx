import { Link } from "react-router-dom";
const ButtonLink = ({ children, to, onClick, small }) => {
  return (
    <button className={`${small && "mt-8"}`} onClick={onClick}>
      <Link
        className="px-4 py-1 text-base text-background bg-red  hover:bg-rose-300 rounded-md transition-all duration-300"
        to={to}
      >
        {children}
      </Link>
    </button>
  );
};

export default ButtonLink;
