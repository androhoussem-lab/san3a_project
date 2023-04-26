import { useEffect, useReducer } from "react";

const useSlider = (slides) => {
  const initValue = 0;

  const reducer = (state, action) => {
    console.log("re-render");
    switch (action.type) {
      case "NEXT":
        if (state === slides.length - 1) {
          return 0;
        }
        return state + 1;
      case "PREVIOUS":
        if (state === 0) {
          return slides.length - 1;
        }
        return state - 1;
      case "SET_SLIDE":
        return action.payload;
      default:
        throw new Error(`action type ${action.type} not exist!!`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initValue);

  const next = () => {
    dispatch({ type: "NEXT" });
  };
  const previous = () => {
    dispatch({ type: "PREVIOUS" });
  };

  const setSlide = (index) => {
    dispatch({ type: "SET_SLIDE", payload: index });
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      next();
    }, 3000);
    return () => {
      clearInterval(sliderInterval);
    };
  }, [state.index]);

  return { state, next, previous, setSlide };
};

export default useSlider;
