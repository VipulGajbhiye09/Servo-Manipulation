/* eslint-disable react/prop-types */
import  { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../slider.css"

const SliderComponent = ({ min = 0, max = 100, title }) => {
  const [value, setValue] = useState((min + max) / 2);
    // const [value, setValue] = useState(0);

  const handleSliderChange = (newValue) => {
    console.log("Slider value:", newValue);
    setValue(newValue);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 p-5 w-1/2 border-solid border-2 border-gray-500 rounded-lg font-semibold ">
      <h2>{title}</h2>
      <Slider min={min} max={max} value={value} onChange={handleSliderChange} />

      <p> Current Value : {value} </p>
      <p>
        Min: {min} | Max: {max}
      </p>
    </div>
  );
}

export default SliderComponent;
