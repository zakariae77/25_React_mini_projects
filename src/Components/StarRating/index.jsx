import "./style.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function StartRating({ noOfStars = 6 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(rating == currentIndex ? 0 : currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }
  function handleMouseLeave(currentIndex) {
    setHover(0);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "gold" : ""}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
            cursor={"pointer"}
          />
        );
      })}
    </div>
  );
}
