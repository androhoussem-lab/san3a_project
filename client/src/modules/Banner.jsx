import jewelries from "../assets/images/jewelries.webp";

const Bunner = () => {
  const style = {
    overflow: "hidden",
    width: "100%",
    hight: "100%",
    backgroundImage: `url(${jewelries})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      style={style}
      className="relative w-full h-96 flex flex-col justify-center items-center"
    >
      <h2 className="text-center text-lg sm:text-xl md:text-4xl lg:text-5xl text-yellow font-semibold">
        All you want is hear
      </h2>
      <h3 className="text-center text-sm sm:text-xl md:text-2xl lg:text-3xl text-background">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
        consequuntur.
      </h3>
    </div>
  );
};

export default Bunner;
