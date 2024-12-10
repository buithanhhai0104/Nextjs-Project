import Image from "next/image";
import Link from "next/link";
const Popular: React.FC = () => {
  const popularItems = [
    {
      title: "Hồ Chí Minh",
      data: [
        {
          location: "Đà Lạt",
          time: "12/10/2024",
        },
        {
          location: "Đà Lạt",
          time: "12/10/2024",
        },
        {
          location: "Đà Lạt",
          time: "12/10/2024",
        },
      ],
      image: "/images/popular-image1.png",
    },
    {
      title: "Đà Lạt",
      data: [
        {
          location: "Đà Lạt",
          time: "12/10/2024",
        },
        {
          location: "Đà Lạt",
          time: "12/10/2024",
        },
        {
          location: "Đà Lạt",
          time: "12/10/2024",
        },
      ],
      image: "/images/popular-image2.png",
    },
    {
      title: "Đà nẵng",
      data: [
        {
          location: "Đà Lạt",
          time: "12/10/2024",
        },
        {
          location: "Đà Lạt",
          time: "12/10/2024",
        },
        {
          location: "Đà Lạt",
          time: "12/10/2024",
        },
      ],
      image: "/images/popular-image3.png",
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center text-[#00613D] font-bold">
        TUYẾN PHỔ BIẾN
      </h1>
      <p className="text-center text-[#00613D]">
        Được khách hàng tin tưởng và lựa chọn
      </p>
      <div className="flex gap-8 ">
        {popularItems.map((item, index) => {
          return (
            <Link
              href={"/"}
              className="bg-white rounded-xl mt-5 shadow-custom"
              key={index}
            >
              <div className="relative">
                <Image
                  className="shadow-custom rounded-xl"
                  width={360}
                  height={140}
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute top-[50%] left-4">
                  <p>Tuyến xe từ</p>
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                </div>
              </div>
              {item.data.map((data, index) => {
                return (
                  <div
                    className="flex flex-col p-4 text-black border-b-2"
                    key={index}
                  >
                    <span className="text-[#00613D] font-semibold text-xl">
                      {data.location}
                    </span>
                    <p className="text-sm">
                      360km - 5 giờ 30 phút - {data.time}
                    </p>
                  </div>
                );
              })}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
