import React from "react";
import { useEffect, useState } from "react";

function WorksItems({ item }) {
  const [HoverCartState, setHoverCartState] = useState();
  
  return (
    <div className="container_work">
      {HoverCartState && item.about ? (
        <div className="containerHoverCard">
          <div className="containerImgHoverCard">
            <img src={item.image} alt="" />
          </div>
          <div className="containerTextHoverCard">
            <div className="containerSubHoverCard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                id="IconCloseCard"
                onClick={() => setHoverCartState(false)}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
            <div className="containerText">
              {item.about}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="work__card"
        key={item.id}
        onClick={() => setHoverCartState(!HoverCartState)}
      >
        {item.link ? (
          <a href={item.link} target="_blank">
            <img src={item.image} alt="" className="work__img" />
          </a>
        ) : (
          <a href={item.link} target="_blank">
            <img src={item.image} alt="" className="work__img" />
          </a>
        )}

        <h3 className="work__title">{item.title}</h3>
        <a href="#" className="work__button">
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default WorksItems;
