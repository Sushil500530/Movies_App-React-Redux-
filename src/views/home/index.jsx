import { useSelector } from "react-redux";
import BannerHome from "../../components/banner";
import Card from "../../components/card";

export default function Home() {
  const trandingMoviesData = useSelector(state => state?.moviesData?.bannerData);
  return (
    <div>
      <BannerHome />
      <div className="container mx-auto px-3 my-5">
        <h1 className="text-xl lg:text-2xl font-bold">Tranding Show</h1>
        <div className="overflow-hidden">
        <div  className="grid grid-cols-[repeat(auto,250px)] grid-flow-col gap-4 mt-3 overflow-x-auto">
        {
        trandingMoviesData?.length > 0 && trandingMoviesData?.map((data, index) => {
          return <Card
            key={data?.id}
            data={data}
            tranding={true}
            index={index}
          />
        })
      }
        </div>

        </div>
      </div>
    </div>
  )
}
