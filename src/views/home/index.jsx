import { useSelector } from "react-redux";
import BannerHome from "../../components/banner";
import HorizontalScrollCard from "../../components/horizontal-scroll-card";

export default function Home() {
  const trandingMoviesData = useSelector(state => state?.moviesData?.bannerData);
  return (
    <div>
      <BannerHome />
        <HorizontalScrollCard
        data={trandingMoviesData}
        heading="Trending Show"
        />
    </div>
  )
}
