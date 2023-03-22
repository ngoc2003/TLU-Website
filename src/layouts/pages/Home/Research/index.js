import React from "react";
import { Image } from "../../../../assets/img/image";
import HomeSectionContainer from "../../../containers/HomeSectionContainer";
const RESEARCH_DATA = [
  {
    image: Image.training2,
    title: "Quyết định giao đề tài cấp cơ sở năm 2023",
  },
  {
    image: Image.training2,
    title:
      "Báo cáo tóm tắt Hội nghị Khoa học Sinh viên lần thứ 35, tháng 6/2022",
  },
  {
    image: Image.training2,
    title: "DANH SÁCH ĐỀ TÀI NCKH CẤP CƠ SỞ NĂM 2022",
  },
];
const Research = () => {
  return <HomeSectionContainer title="Nghiên cứu" data={RESEARCH_DATA} />;
};

export default Research;
