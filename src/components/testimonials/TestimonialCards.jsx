import React from "react";

import icon from "../../images/testimonicon.svg";
import star from "../../images/testimon-star.svg";

const TestimonialCards = () => {
  return (
    <div className="shadow-xl p-7 bg-white cursor-pointer rounded-[20px]">
      <div>
        <div className="w-full flex items-center justify-between">
          <img src={icon} alt="icom" />
          <div className="flex items-center justify-center gap-2">
            <img src={star} alt="star" />
            <p>4.5</p>
          </div>
        </div>
 
        <p className="text-[16px] font-[poppins-medium] mt-7 mb-5">
          We chose this hotel for our honeymoon and it was perfect. The romantic
          atmosphere and special touches made it unforgettable.
        </p>
        <p className="text-[18px] font-[poppins-bold]">Henry Patrick</p>
      </div>
    </div>
  );
};

export default TestimonialCards;
