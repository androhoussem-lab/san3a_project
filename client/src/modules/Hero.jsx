import SliderIndicator from "../common/components/SliderIndicator";
import useSlider from "../hooks/useSlider";
import slides from "../utils/slides";
//after get this slides from api
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsSearch,
} from "react-icons/bs";

const Hero = () => {
  const { state, next, previous, setSlide } = useSlider(slides);

  return (
    <section className="px-2 sm:px-6 pt-16 md:px-8 lg:px-16 h-96 sm:h-screen">
      <div className="relative bg-cover  h-full transition-all duration-100">
        <img
          src={slides[state].imageUrl}
          alt={slides[state].title}
          className="w-full h-full rounded-lg"
        />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center px-16">
          <h1 className="text-center text-base sm:text-xl md:text-4xl lg:text-5xl text-yellow font-semibold">
            {slides[state].title}
          </h1>
          <h2 className="text-center text-sm sm:text-xl md:text-2xl lg:text-3xl text-background">
            {slides[state].body}
          </h2>
          <div className="z-20 w-full sm:w-1/2 py-1 px-2 mt-2 sm:mt-8 md:px-4 md:py-2  bg-background rounded-full">
            <form className="w-full flex justify-center items-center gap-4">
              <input
                className="w-full px-2 md:px-4 md:py-1 flex-1 border-none outline-none bg-background text-blue text-sm sm:text-base md:text-lg lg:text-xl"
                placeholder="Rechercher"
              />
              <button className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
                <BsSearch />
              </button>
            </form>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full flex justify-between items-center px-2 md:px-4">
          <button
            onClick={previous}
            className="bg-gray-800 opacity-80 text-background text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-full"
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button
            onClick={next}
            className="bg-gray-800 opacity-80 text-background text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-full"
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 w-full">
          <SliderIndicator index={state} slides={slides} setSlide={setSlide} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
