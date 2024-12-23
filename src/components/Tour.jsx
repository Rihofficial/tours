import { useState } from "react";

const Tour = ({ tours, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, name, info, image, price } = tours;
  console.log(info);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div className="tour-content">
        <p className="tour-header">{name}</p>
        <p className="info">
          {readMore ? info : `${info.substring(0, 100)}...`}
          <span className="read-more" onClick={() => setReadMore(!readMore)}>/
            {readMore ? "read less" : "read more"}
          </span>
        </p>
        <h4>${price}</h4>
        <button className="tour-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;