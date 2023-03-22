import React from "react";
import fbIcon from "../../assets/icons/fb-icon.png";
import youTubeIcon from "../../assets/icons/ytb-icon.png";
import twitterIcon from "../../assets/icons/twitter-icon.png";
const FOOTER_DATA = [
  {
    title: "Trường đại học thủy lợi",
    info: [
      {
        name: "Địa chỉ",
        content: "175 Tây Sơn, Đống Đa, Hà Nội",
      },
      {
        name: "Điện thoại",
        content: "(024) 38522201",
      },
      {
        name: "Email",
        content: "phonghcth@tlu.edu.vn",
      },
    ],
  },
  {
    title: "Cơ sở phố hiến",
    info: [
      {
        name: "Địa chỉ",
        content: "Quốc lộ 38B Nhật Tân, Tiên Lữ, Hưng Yên",
      },
      {
        name: "Điện thoại",
        content: "(0221) 3883885",
      },
      {
        name: "Email",
        content: "Bandtctsvphohien@tlu.edu.vn",
      },
    ],
  },
  {
    title: "PHÂN HIỆU ĐẠI HỌC THỦY LỢI",
    info: [
      {
        name: "Địa chỉ 1",
        content: "Số 2 Trường Sa, P.17, Q.Bình Thạnh, Tp.Hồ Chí Minh",
      },
      {
        name: "Điện thoại 1",
        content: "(028) 38400532",
      },
      {
        name: "Địa chỉ 2",
        content: "Phường An Thạnh, TP Thuận An, Tỉnh Bình Dương",
      },
      {
        name: "Điện thoại 2",
        content: "((065) 3748620",
      },
      {
        name: "Email",
        content: "cs2@tlu.edu.vn",
      },
    ],
  },
  {
    title: "VIỆN ĐÀO TẠO VÀ KHOA HỌC ỨNG DỤNG MIỀN TRUNG",
    info: [
      {
        name: "Địa chỉ",
        content: "Số 115 Trần Phú, Thành phố Phan Rang, Tỉnh Ninh Thuận",
      },
      {
        name: "Điện thoại",
        content: "(0259) 3823027",
      },

      {
        name: "Email",
        content: "trungtamdh2@tlu.edu.vn",
      },
    ],
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className=" bg-[#004eaf]">
        <div className="container flex justify-between py-2 items-center text-sm md:text-xl text-white">
          <p>© {year} TRƯỜNG ĐẠI HỌC THỦY LỢI</p>
          <div className="flex gap-3">
            <img width="30px" src={fbIcon} alt="" />
            <img width="30px" src={youTubeIcon} alt="" />
            <img width="30px" src={twitterIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-primary py-6">
        <div className="md:grid grid-cols-3 gap-4 container">
          <div className="col-span-1">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119229.4362157697!2d105.70717972486366!3d20.955732351859126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8109765ba5%3A0xd84740ece05680ee!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7p3kgbOG7o2k!5e0!3m2!1svi!2s!4v1679499592060!5m2!1svi!2s"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 gap-4 text-[13px] text-white ">
            {FOOTER_DATA.map((data, index) => (
              <div
                key={data.title}
                className={`${
                  index < FOOTER_DATA.length / 2 &&
                  "border-b border-b-[rgba(255,255,255,0.2)] pb-4"
                } `}
              >
                <h4 className="uppercase">{data.title}</h4>
                {data.info.map((item) => (
                  <div className="flex" key={item.content}>
                    {item.name}
                    {": "}
                    {item.content}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
