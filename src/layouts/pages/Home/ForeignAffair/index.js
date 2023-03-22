import React from "react";
import { Image } from "../../../../assets/img/image";
import HomeSectionContainer from "../../../containers/HomeSectionContainer";
const FOREIGN_AFFAIR_DATA = [
  {
    image: Image.fa1,
    title:
      "Hoàn thành Dự án OKP và Lễ tri ân GS. MARCEL STIVE, Đại học TUDELFT, Hà Lan",
  },
  {
    image: Image.fa2,
    title:
      "Trường Đại học Thủy lợi mở rộng quan hệ hợp tác với doanh nghiệp Nhật Bản",
  },
  {
    image: Image.fa3,
    title:
      "Trường ĐH Thủy lợi ký kết Biên bản ghi nhớ với Trường Isabela State University, Philippines",
  },
];
const ForeignAffair = () => {
  return (
    <HomeSectionContainer title="Đối ngoại" data={FOREIGN_AFFAIR_DATA} bgGray />
  );
};

export default ForeignAffair;
