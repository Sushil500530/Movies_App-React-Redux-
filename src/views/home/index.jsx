import { useSelector } from "react-redux";
import BannerHome from "../../components/banner";
import Card from "../../components/card";

export default function Home() {
  const trandingMoviesData = useSelector(state => state?.moviesData?.bannerData);
  return (
    <div>
      <BannerHome />
      <div>
        <h1>Tranding Show</h1>
        {
        trandingMoviesData?.length > 0 && trandingMoviesData?.map(data => {
          return <Card
            key={data?.id}
            data={data}
          />
        })
      }
      </div>
    </div>
  )
}
