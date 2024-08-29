import { useSelector } from "react-redux";
import BannerHome from "../../components/banner";
import HorizontalScrollCard from "../../components/horizontal-scroll-card";
import { useFetchData } from "../../hooks/custom-fetch-data/idnex";

export default function Home() {
  const trandingMoviesData = useSelector(state => state?.moviesData?.bannerData);
  const {data:nowPlayingData}= useFetchData('/movie/now_playing')
  const {data:popularView}= useFetchData('/movie/top_rated')
 
console.log(popularView)


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
        <HorizontalScrollCard
        data={popularView}
        heading="Popular Views"
        />
    </div>
  )
}
