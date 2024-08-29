import { useSelector } from "react-redux";
import BannerHome from "../../components/banner";
import HorizontalScrollCard from "../../components/horizontal-scroll-card";
import useNowPlayingData from "../../hooks/use-now-playing";
import { useFetchData } from "../../hooks/custom-fetch-data/idnex";

export default function Home() {
  const trandingMoviesData = useSelector(state => state?.moviesData?.bannerData);
  // const nowPlayingData = useNowPlayingData();
  const {data:nowPlayingData}= useFetchData('/movie/now_playing')
 



  return (
    <div>
      <BannerHome />
        <HorizontalScrollCard
        data={trandingMoviesData}
        heading="Trending Show"
        tranding ={true}
        />
        <HorizontalScrollCard
        data={nowPlayingData}
        heading="Now Playing"
        />
    </div>
  )
}
