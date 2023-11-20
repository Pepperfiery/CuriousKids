import React from "react";

function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#E0F7DB] p-7">
      <div className="mb-4 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold">12k+</h2>
        <h4 className="text-xs md:text-[13px] text-[#818181]">Kids per year</h4>
      </div>
      <div className="mb-4 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold">9+</h2>
        <h4 className="text-xs md:text-[13px] text-[#818181]">Years of experience</h4>
      </div>
      <div className="mb-4 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold">62+</h2>
        <h4 className="text-xs md:text-[13px] text-[#818181]">Excellence awards</h4>
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl font-bold">20+</h2>
        <h4 className="text-xs md:text-[13px] text-[#818181]">Brand Partners</h4>
      </div>
    </div>
  );
}

export default Stats;
