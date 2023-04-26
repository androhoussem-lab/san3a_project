import { useState } from "react";
import Logo from "../common/components/Logo";
import ButtonLink from "../common/components/ButtonLink";
import { AiOutlineMenu, AiOutlineCloseSquare } from "react-icons/ai";
import NavItem from "../common/components/NavItem";
import { BiHomeSmile } from "react-icons/bi";
import { RiTShirtLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";

const Navbar = () => {
  const [listInView, setListInView] = useState(false);

  const handleMenuToggle = () => {
    setListInView((currentState) => !currentState);
    console.log(listInView);
  };

  return (
    <div className="w-full flex flex-col gap-8 z-50 bg-background fixed">
      {/*large screen*/}
      <nav className="w-full  flex justify-between px-2 sm:px-6 py-2 md:px-8 lg:px-16 z-50">
        <div className="w-full md:w-fit flex justify-between items-center">
          <Logo />
          <button className="md:hidden" onClick={handleMenuToggle}>
            {listInView ? (
              <span className="text-background">
                <AiOutlineCloseSquare />
              </span>
            ) : (
              <AiOutlineMenu />
            )}
          </button>
        </div>
        <ul className="list-none hidden md:flex gap-4">
          <NavItem to="/">
            <span>
              <BiHomeSmile />
            </span>
            Home
          </NavItem>
          <NavItem to="products">
            <span>
              <RiTShirtLine />
            </span>
            Produits
          </NavItem>
          <NavItem to="markets">
            <span>
              <BiStoreAlt />
            </span>
            Magasins
          </NavItem>
          <NavItem to="wishlist">
            <span>
              <BsCart4 />
            </span>
            Souhaits
          </NavItem>
          <NavItem to="contact">
            <span>
              <AiOutlinePhone />
            </span>
            Contact
          </NavItem>
        </ul>
        <div className="hidden md:block">
          <ButtonLink to="account/login">Commancer</ButtonLink>
        </div>
      </nav>

      {/*small screen*/}
      <div
        className={`z-40 md:hidden w-full h-full bg-gradient-to-b from-blue to-green fixed top-0 ${
          listInView ? "left-0" : "-left-[100%]"
        } transition-all duration-300`}
      >
        <ul className="w-full list-none h-full flex flex-col justify-center items-center gap-4">
          <NavItem to="/" onClick={handleMenuToggle} smallScreen={true}>
            Home
          </NavItem>
          <NavItem to="products" onClick={handleMenuToggle} smallScreen={true}>
            Produits
          </NavItem>
          <NavItem to="markets" onClick={handleMenuToggle} smallScreen={true}>
            Magasins
          </NavItem>
          <NavItem to="wishlist" onClick={handleMenuToggle} smallScreen={true}>
            Souhaits
          </NavItem>
          <NavItem to="contact" onClick={handleMenuToggle} smallScreen={true}>
            Contact
          </NavItem>
          <ButtonLink
            to="account/login"
            onClick={handleMenuToggle}
            small={true}
          >
            Commancer
          </ButtonLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
