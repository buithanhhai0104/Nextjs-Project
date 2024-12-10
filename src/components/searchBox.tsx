"use client";
import { useState } from "react";
const SearchBox: React.FC = () => {
  const [departure, setDeparture] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [travelDate, setTravelDate] = useState<string>("");
  const [numTickets, setNumTickets] = useState<number>(1);
  return (
    <div className=" relative max-w-6xl m-auto mt-[-100px] p-6 border-[2px] border-orange-300 rounded-2xl shadow-custom bg-white">
      <div className="flex justify-between mb-6">
        <div>
          <span className="text-orange-500 text-sm">Tìm kiếm vé xe</span>
        </div>
      </div>
      <div className="flex gap-8 justify-between pb-10 ">
        <div className="w-full">
          <label
            htmlFor="departure"
            className="block text-[16px] font-medium text-gray-700"
          >
            Điểm đi
          </label>
          <input
            type="text"
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-black shadow-sm "
            placeholder="Chọn điểm đi"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="destination"
            className="block text-[16px] font-medium text-gray-700"
          >
            Điểm đến
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-black shadow-sm focus:ring-orange-500 focus:border-orange-500"
            placeholder="Chọn điểm đến"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="travelDate"
            className="block text-[16px] font-medium text-gray-700"
          >
            Ngày đi
          </label>
          <input
            type="date"
            id="travelDate"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-black shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="numTickets"
            className="block text-[16px] font-medium text-gray-700"
          >
            Số vé
          </label>
          <input
            type="number"
            id="numTickets"
            value={numTickets}
            onChange={(e) => setNumTickets(parseInt(e.target.value, 10))}
            className="mt-1 block w-full px-4 py-2 border rounded-md text-black shadow-sm focus:ring-orange-500 focus:border-orange-500"
            min="1"
            max="10"
          />
        </div>
      </div>

      <div className=" flex justify-center">
        <button className=" mb-[-50px] w-96 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          Tìm chuyến xe
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
