import React, { useState } from "react";

import dash from "../../images/dash.svg";
import plus from "../../images/plus.svg";

const FAQblocks = ({ head, def }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        open
          ? "w-full cursor-pointer shadow-xl rounded-[13px] border border-solid border-[#ECECEC] bg-white px-6 py-7  "
          : "w-full cursor-pointer rounded-[13px] border border-solid border-[#ECECEC] bg-[#FAFAFA] px-6 py-7  "
      }
    >
      <div className="flex items-start justify-start gap-4">
        <img
          onClick={() => setOpen(true)}
          className={open ? "hidden" : "block"}
          src={plus}
          alt="plus"
        />
        <img
          onClick={() => setOpen(false)}
          className={open ? "block" : "hidden"}
          src={dash}
          alt="dash"
        />
        <div>
          <p className="mb-4 mt-2 text-[16px] font-[poppins-medium]">{head}</p>
          {open && <p className="text-[16px] font-[poppins-regular]">{def}</p>}
        </div>
      </div>
    </div>
  );
};

export default FAQblocks;
