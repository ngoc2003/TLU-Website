import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Image } from "../../assets/img/image";
import bars from "../../assets/icons/bars.png";
import Search from "../../components/Search";
import Banner from "./Banner";
import useMediaQuery from "../../hooks/useMediaQuery";
const HEADER_TABS = [
  {
    label: "Giới thiệu",
    path: "/gioi-thieu",
    children: [
      {
        label: "Tổng quan",
        path: "/tong-quan",
      },
      {
        label: "Sứ mạng, tầm nhìn",
        path: "/Su-mang-tam-nhin",
      },
      {
        label: "Cơ cấu tổ chức và nhân lực",
        path: "/co-cau-to-chuc-va-nhan-luc",
      },
      {
        label: "Cơ sở vật chất",
        path: "/co-so-vat-chat",
      },
      {
        label: "Công tác Đảng",
        path: "/cong-tac-dang",
      },
      {
        label: "Công tác Đoàn",
        path: "/cong-tac-doan",
      },
    ],
  },
  {
    label: "Tin tức và thông báo",
    path: "/tin-tuc-thong-bao",
    children: [
      {
        label: "Tin tức",
        path: "/tin-tuc",
      },
      {
        label: "Thông báo",
        path: "/thong-bao",
      },
    ],
  },
  {
    label: "Tuyển sinh",
    path: "/tuyen-sinh",
    children: [
      {
        label: "Đại học",
        path: "/tuyen-sinh-dai-hoc",
      },
      {
        label: "Thạc sĩ",
        path: "/tuyen-sinh-thac-si",
      },
      {
        label: "Tiến sĩ",
        path: "/tuyen-sinh-tien-si",
      },
      {
        label: "Vừa làm vừa học",
        path: "/tuyen-sinh-vua-lam-vua-hoc",
      },
    ],
  },
  {
    label: "Đào tạo",
    path: "/dao-tao",
    children: [
      {
        label: "Thạc sĩ",
        path: "/thac-si",
      },
      {
        label: "Đại học chính quy",
        path: "/dai-hoc-chinh-quy",
      },
      {
        label: "Cam kết đảm bảo chất lượng đào tạo",
        path: "/cam-ket-dam-bao-chat-luong-dao-tao",
      },
      {
        label: "Thông báo, tin tức",
        path: "/thong-bao-tin-tuc",
      },
      {
        label: "Tiến sĩ",
        path: "/tien-si",
      },
      {
        label: "Vừa làm vừa học",
        path: "/vua-lam-vua-hoc",
      },
    ],
  },
  {
    label: "Nghiên cứu",
    path: "/nghien-cuu",
    children: [
      {
        label: "Tin học khoa học công nghệ",
        path: "/tin-hoc-khoa-hoc-cong-nghe",
      },
      {
        label: "NCKH & chuyen giao công nghệ",
        path: "/nckh-chuyen-giao-cong-nghe",
      },
      {
        label: "Quỹ phát triển khoa học công nghệ",
        path: "/quy-phat-trien-khcn",
      },
      {
        label: "Sở hữu trí tuệ",
        path: "/so-huu-tri-tue",
      },
      {
        label: "Nhóm nghiên cứu mạnh",
        path: "/nhom-nghien-cuu-manh",
      },
      {
        label: "Các đơn vị KHCN",
        path: "/cac-don-vi-khcn",
      },
    ],
  },
  {
    label: "Đối ngoại",
    path: "/doi-ngoai",
  },
  {
    label: "Văn bản",
    path: "/van-ban",
  },
  {
    label: "Sinh viên",
    path: "/sinh-vien",
    children: [
      {
        label: "Thông báo",
        path: "/thong-bao-sv",
      },
      {
        label: "Hỗ trợ sinh viên",
        path: "/ho-tro-sinh-vien",
      },
      {
        label: "Sinh viên hiện tại",
        path: "/sinh-vien-hien-tai",
      },
      {
        label: "Hoạt động sinh viên",
        path: "/hoat-dong-sinh-vien",
      },
      {
        label: "Học phí",
        path: "/hoc-phi",
      },
      {
        label: "Cựu sinh viên",
        path: "/cuu-sinh-vien",
      },
      {
        label: "Sinh viên tốt nghiệp ",
        path: "/sinh-vien-tot-nghiep",
      },
      {
        label: "Sinh viên tương lai",
        path: "/sinh-vien-tuong-lai",
      },
      {
        label: "Giáo viên chủ nhiệm",
        path: "/giao-vien-chu-nhiẹm",
      },
    ],
  },
  {
    label: "Tin nội bộ",
    path: "/tin-noi-bo",
  },
  {
    label: "Liên hệ",
    path: "/lien-he",
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 990px)");

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="container gap-5 flex justify-between items-center py-4">
        <Link to="/">
          <img src={Image.logo} alt="" />
        </Link>
        <div className="flex-1 flex gap-3 flex-col items-end">
          <div className="flex md:flex-row flex-col gap-1  md:gap-3 items-center">
            <Link className="text-xl" to="/login">
              Login
            </Link>
            <div className="flex gap-3">
              <span>
                <img src={Image.vi} alt="" />
              </span>
              <span>
                <img src={Image.en} alt="" />
              </span>
            </div>
          </div>
          <Search className="hidden lg:flex" />
        </div>
      </div>
      <div
        style={{
          background: `url(${Image.bgSlider}) top center/ cover no-repeat`,
          position: "relative",
        }}
      >
        <div className="bg-primary flex lg:hidden">
          <div className="container flex gap-2">
            <button onClick={handleToggleMenu}>
              <img src={bars} alt="" />
            </button>
            <Search className="rounded-sm" />
          </div>
        </div>
        <div
          className={`absolute origin-top lg:static top-8 left-0 right-0 z-20 lg:container ${
            !open && !isDesktop ? "scale-y-0" : "scale-y-1"
          }`}
        >
          <div className="bg-primary lg:flex flex-wrap ">
            {HEADER_TABS.map((tab, index) => (
              <Link
                to={tab.path}
                className="block lg:inline-block text-white lg:py-3.5 hover:lg:bg-third relative group lg:px-3  lg:text-center  whitespace-nowrap "
                key={`HEADER-${tab.label}`}
              >
                <div
                  className={`lg:border-l absolute left-0 top-1/2 -translate-y-1/2 border-l-gray-50 w-1 h-3 ${
                    index === 0 && "opacity-0"
                  }`}
                ></div>
                <span className="uppercase bg-blueMobile block p-3 lg:p-0 lg:bg-transparent">
                  {tab.label}
                </span>
                {!!tab?.children && (
                  <div className="lg:absolute text-left z-10 top-full duration-300 bg-third left-0 h-auto lg:w-[300px] p-0.5 lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible">
                    {tab.children.map((subTab) => (
                      <Link
                        to={subTab.path}
                        link={`SUB_TAB-${subTab.label}`}
                        className="block pl-6 lg:pl-3 p-3 border-b border-b-white last-of-type:border-b-transparent hover:lg:italic duration-300 hover:lg:text-primary"
                      >
                        {">> "}
                        {subTab.label}
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="container">{pathname === "/" && <Banner />}</div>
      </div>
    </>
  );
};

export default Header;
