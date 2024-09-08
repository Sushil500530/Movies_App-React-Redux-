import { useSelector } from "react-redux";
import BannerHome from "../../components/banner";
import HorizontalScrollCard from "../../components/horizontal-scroll-card";
import { useFetchData } from "../../hooks/custom-fetch-data/idnex";

export default function Home() {
  const trandingMoviesData = useSelector(state => state?.moviesData?.bannerData);
  const { data: nowPlayingData } = useFetchData('/movie/now_playing');
  const { data: topRatedData } = useFetchData('/movie/top_rated');
  const { data: tvSeriesData } = useFetchData('/tv/popular');
  const {data:onAirData}= useFetchData('/tv/on_the_air');

  // console.log(topRatedData)


  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trandingMoviesData}
        heading="Trending Show"
        tranding={true}
        media_type={'tranding'}
      
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading="Now Playing"
          media_type={'movie'}
      />
      <HorizontalScrollCard
        data={topRatedData}
        heading="Top Rated Movies"
        media_type={'movie'}
      />
      <HorizontalScrollCard
        data={tvSeriesData}
        heading="Popular TV Show"
        media_type={'tv'}
      />
      <HorizontalScrollCard
        data={onAirData}
        heading="On The Air"
        media_type={'tv'}
      />
    </div>
  )
}
