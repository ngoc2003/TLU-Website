import React from "react";
import { Image } from "../../../../assets/img/image";
const STUDENT_DATA = [
  {
    image: Image.student1,
    list: [
      "Lý do lựa chọn ngành Kinh tế xây dựng, Đại học Thuỷ lợi",
      "Tuyển sinh 2023: 5 lý do nên chọn ngành Kỹ thuật Xây dựng Công trình thủy​ Trường Đại học Thủy lợi",
      "Tuyển sinh 2023: Cẩm nang Ngành Tài chính - Ngân hàng (Kỳ 1)",
    ],
  },
  {
    image: Image.student2,
    list: [
      "Nam sinh Trường Đại học Thủy lợi đem kiến thức kỹ thuật hóa học vào các đề tài nghiên cứu",
      "Cô nàng 2K chia sẻ bí quyết rút ngắn thời gian học đại học cho các bạn sinh viên muốn ra trường sớm",
      "Chân dung nữ sinh xinh đẹp học ngành Kỹ thuật ô tô",
    ],
  },
  {
    image: Image.student3,
    list: [
      "Cựu sinh viên lớp 36N, khoa Kỹ thuật Tài nguyên nước được bầu giữ chức vụ Chủ tịch UBND huyện Bạch Thông, tỉnh Bắc Kạn",
      "“Khắc tinh” máy bay Mỹ      ",
      "Cựu sinh viên Đại học Thủy lợi trồng dưa lưới công nghệ thông minh ở Hà Tĩnh",
    ],
  },
];
const Student = () => {
  return (
    <div className="bg-gray-100">
      <div className="container py-6">
        <h4 className="uppercase text-xl pb-3 font-semibold text-primary">
          sinh viên
        </h4>
        <div className="md:flex my-2 gap-6">
          {STUDENT_DATA.map((item) => (
            <div key={`Card-${item.title}`} className="flex-1">
              <img src={item.image} alt="" className="w-full h-[164px]" />
              <div className="px-6">
                {item.list.map((child) => (
                  <li
                    key={`Res-${child}`}
                    className="truncate-text-1 text-sm mt-1 cursor-pointer hover:text-third"
                  >
                    {child}
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Student;
