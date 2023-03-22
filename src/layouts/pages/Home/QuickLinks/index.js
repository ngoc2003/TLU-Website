import React from "react";
import { Link } from "react-router-dom";

const QUICK_LINKS = [
  {
    label: "Tuyển sinh",
    icon: require("../../../../assets/icons/tuyen_sinh.png"),
  },
  {
    label: "Thông tin việc làm",
    icon: require("../../../../assets/icons/viec_lam.png"),
  },
  {
    label: "Đảm bảo chất lượng",
    icon: require("../../../../assets/icons/quality.jpeg"),
  },
  {
    label: "Tạp chí",
    icon: require("../../../../assets/icons/www.jpeg"),
  },
  {
    label: "Thư viện",
    icon: require("../../../../assets/icons/library.jpeg"),
  },
  {
    label: "TLU Mail",
    icon: require("../../../../assets/icons/email.jpeg"),
  },
  {
    label: "Lịch công tác",
    icon: require("../../../../assets/icons/lichcongtac.jpeg"),
  },
  {
    label: "Đăng ký học",
    icon: require("../../../../assets/icons/user.jpeg"),
  },
];
const QuickLinks = () => {
  return (
    <div className="grid grid-cols-4 md:flex container justify-evenly py-6 border-b border-b-gray-200 flex-wrap gap-4">
      {QUICK_LINKS.map((link) => (
        <div className="text-center col-span-1 flex-1">
          <img className="h-6 mx-auto mb-3" src={link.icon} alt="" />
          <span className="text-sm text-primary font-semibold md:whitespace-nowrap">
            {link.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
