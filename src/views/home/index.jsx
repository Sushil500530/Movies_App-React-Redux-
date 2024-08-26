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
        <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-3">
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
  )
}
