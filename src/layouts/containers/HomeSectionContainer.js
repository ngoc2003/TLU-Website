import React from "react";

const HomeSectionContainer = ({
  bgGray,
  data,
  title,
  disabledCatalogue = false,
}) => {
  return (
    <div className={bgGray && "bg-gray-100"}>
      <div className="container py-6">
        <h4 className="uppercase text-xl pb-3 font-semibold text-primary">
          {title}
        </h4>
        <div className="lg:grid grid-cols-4 gap-6 cursor-pointer">
          <div className="flex flex-col md:flex-row gap-6 col-span-3">
            {data.map((item) => (
              <div key={`Card-${item.title}`} className="flex-1">
                <img src={item.image} alt="" className="w-full h-[164px]" />
                <p className="truncate-text-2 mt-1">{item.title}</p>
              </div>
            ))}
          </div>
          {!disabledCatalogue && (
            <div className="col-span-1 mt-10 lg:mt-0">
              {data.map((item) => (
                <li
                  className="text-sm border-b hover:text-third cursor-pointer border-dotted py-1"
                  key={`List-${item.title}`}
                >
                  {item.title}
                </li>
              ))}
              <div className="text-sm text-right py-6">{">> Xem tất cả"}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionContainer;
