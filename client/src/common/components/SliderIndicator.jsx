const SliderIndicator = ({ index, slides, setSlide }) => {
  const indicatorDot = slides.map((slide, slideIndex) => {
    return (
      <div
        key={slide.id}
        onClick={() => setSlide(slideIndex)}
        className={`w-5 h-2 sm:w-6 sm:h-2 md:w-8 md:h-2 ${
          slideIndex === index ? "bg-background" : "bg-gray-800 opacity-50"
        } bg-background opacity-50 rounded-full cursor-pointer`}
      />
    );
  });
  return (
    <div className="flex justify-center items-center gap-[5px] sm:gap-4">
      {indicatorDot}
    </div>
  );
};

export default SliderIndicator;
