import React from "react";
import { Image } from "../../../../assets/img/image";
import HomeSectionContainer from "../../../containers/HomeSectionContainer";
const TRAINING_DATA = [
  {
    image: Image.training1,
    title: "Thông báo kết quả thi chuẩn tiếng Anh đầu ra (A2) đợt 1 năm 2023",
  },
  {
    image: Image.training2,
    title:
      "Thông tin luận án và thời gian bảo vệ luận án tiến sĩ cấp Trường của NCS Phạm Thị Thúy",
  },
  {
    image: Image.training3,
    title:
      "Thông báo tổ chức thi chuẩn tiếng Anh đầu ra (B1) đợt 1 năm 2023 tại Hà Nội",
  },
];
const Training = () => {
  return <HomeSectionContainer title="Đào tạo" data={TRAINING_DATA} />;
};

export default Training;
