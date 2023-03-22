import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image } from "../../../../../assets/img/image";
import hot from "../../../../../assets/gif/hot.gif";
const NEWS_DATA = [
  {
    img: Image.new1,
    title: "Thông báo tuyển sinh năm 2023 của Trường Đại học Thủy lợi",
    hot: true,
  },
  {
    img: Image.new2,
    title: "Nhiều sự ủng hộ dành cho đội bóng đá Trường ĐH Thủy lợi Nam tiến",
    hot: true,
    description:
      "Tối qua 10.3, đội bóng đá Trường ĐH Thủy lợi (Hà Nội) đã có mặt tại tp. Hồ Chí Minh, chuẩn bị cho VCK giải bóng đá Thanh Niên Sinh viên Việt Nam - Cúp Café de Măng Đen lần I - 2023.",
  },
  {
    img: Image.new3,
    title: "Hai anh em ruột cùng chung đội tuyển trường",
    hot: false,
    description:
      "Hai anh em ruột cùng chơi bóng đá cũng nhiều, nhưng cùng trong đội tuyển một trường ĐH, cùng thi đấu chính thức tại một giải quy mô như giải...",
  },
  {
    img: Image.new4,
    title: "Nước mắt rơi ở tứ kết giải bóng đá Thanh Niên Sinh viên",
    description:
      "Đội bóng đá nam sinh viên Trường Đại học Thủy lợi giành chiến thắng ở trận tứ kết 2 giải bóng đá Thanh Niên Sinh viên Việt Nam 2023, tất...",
    hot: false,
  },
  {
    img: Image.new5,
    title:
      "Hoàn thành Dự án OKP và Lễ tri ân GS. MARCEL STIVE, Đại học TUDELFT, Hà Lan",
    description:
      "Vừa qua, Trường Đại học Thủy lợi đã tổng kết Dự án OKP-VNM-10005 sau hơn 03 năm triển khai (2019 -2023).",
    hot: false,
  },
];

const NOTIFICATION_DATA = [
  {
    title:
      "Khảo sát ý kiến sinh viên tốt nghiệp đợt học kì 1 năm học 2022-2023 về tình hình việc làm và đánh giá các hoạt động của Nhà trường",
  },
  {
    title:
      "Hướng dẫn thực hiện miễn giảm học phí đối với sinh viên tại cơ sở Hà Nội Học kỳ II năm học 2022-2023",
  },
  {
    title:
      "Hướng dẫn thực hiện hỗ trợ học tập, hỗ trợ chi phí học tập và trợ cấp xã hội đối với sinh viên tại cơ sở Hà Nội Học kỳ II, năm học 2022 - 2023",
  },
  {
    title: "Một số thông tin phục vụ sinh hoạt lớp tháng 2&3/2023",
  },
];

const TAB = [
  { label: "Tin tức", value: "news", data: NEWS_DATA },
  { label: "Thông báo", value: "notification", data: NOTIFICATION_DATA },
];

const DEPARTMENT = [
  "Phân hiệu đại học Thuỷ Lợi",
  "Khoa Công trình",
  "Khoa Kỹ thuật tài nguyên nước",
  "Khoa Công nghệ thông tin",
  "Khoa Cơ khí",
  "Khoa Điện - Điện tử",
  "Khoa Kinh tế và quản lý",
  "Khoa Hoá và Môi trường",
  "Trung tâm đào tạo quốc tế",
  "Khoa Lý luận chính trị",
  "Viện ĐT và KHƯD Miền Trung",
  "TTKH và triển khai KTTL",
];
const News = () => {
  const [data, setData] = useState(NEWS_DATA[0]);
  const [tabActive, setTabActive] = useState(TAB[0].value);

  const handleMouseOver = (val, item) => {
    if (val === "news") {
      setData(item);
    }
  };

  return (
    <div className="lg:flex gap-5">
      <div className="md:flex gap-5">
        <div className="flex-1 flex gap-3 flex-col">
          <img src={data.img} className="md:h-[380px]" width="100%" alt="" />
          <div>
            <span className="font-semibold">{data.title}</span>
            {data.hot && (
              <img className="inline ml-2 " src={hot} width="20" alt="" />
            )}
          </div>
          <p className="truncate-text-2">{data.description}</p>
        </div>
        <div className="flex-1">
          <div className="flex h-12">
            {TAB.map((tabItem) => (
              <button
                onClick={() => setTabActive(tabItem.value)}
                className={`border border-gray-100 px-3 py-2 border-b-transparent text-lg uppercase last-of-type:border-r-transparent uppercasr flex-1 font-semibold ${
                  tabActive === tabItem.value
                    ? "text-red-700 border-primary"
                    : "bg-gray-100"
                }`}
              >
                {tabItem.label}
              </button>
            ))}
          </div>
          <ul className="pl-6">
            {TAB.filter((tab) => tab.value === tabActive).map((child) => {
              const arr = child.data;
              return arr.map((tabItem) => (
                <>
                  <li
                    onMouseOver={() => handleMouseOver(child.value, tabItem)}
                    className="list-disc border-b-gray-100 border-b py-3"
                  >
                    {tabItem.title}
                    {tabItem?.hot && (
                      <img
                        className="inline ml-2 "
                        src={hot}
                        width="20"
                        alt=""
                      />
                    )}
                  </li>
                </>
              ));
            })}
          </ul>
        </div>
      </div>
      <div className="min-w-[260px]">
        <div className="h-12 uppercase text-lg  font-semibold flex items-center justify-center bg-primary bg-opacity-10 px-10">
          Phân hiệu - khoa
        </div>
        <div className="p-1 border border-gray-500">
          {DEPARTMENT.map((item) => (
            <li
              key={item}
              className="hover:opacity-60 cursor-pointer text-sm list-none py-1 border-b border-b-gray-500 border-dotted last-of-type:border-b-transparent text-primary font-semibold"
            >
              {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
