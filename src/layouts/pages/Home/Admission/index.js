import React from "react";
import { Image } from "../../../../assets/img/image";

const ADMISSION_DATA = [Image.admission1, Image.admission2, Image.admission3];
const Admission = () => {
  return (
    <div className="bg-gray-100">
      <div className="container md:flex gap-6 py-2">
        {ADMISSION_DATA.map((item) => (
          <div className="flex-1 my-2">
            <img src={item} key={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;
