import Popular from "@/components/popular";
import SearchBox from "@/components/searchBox";

export default function Home() {
  return (
    <div className="h-[1000px]">
      <div className="w-full bg-home-image h-[600px] bg-cover"></div>
      <SearchBox />
      <div className="flex pt-14 justify-center w-full ">
        <Popular />
      </div>
    </div>
  );
}
