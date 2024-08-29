import { useSelector } from "react-redux";
import BannerHome from "../../components/banner";
import HorizontalScrollCard from "../../components/horizontal-scroll-card";
import { useEffect, useState } from "react";
import axios from "axios";
import useNowPlayingData from "../../hooks/use-now-playing";

export default function Home() {
  const trandingMoviesData = useSelector(state => state?.moviesData?.bannerData);
  // const [nowPlayingData,setNowplayingData]= useState([]);
  const nowPlayingData = useNowPlayingData();
  
//   const nowFetchData = async()=> {
//     try {
//       const response = await axios.get('/movie/now_playing');
//       setNowplayingData(response?.data?.results)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//  console.log(nowPlayingData);
//   useEffect(()=> {
//     nowFetchData();
//   },[])




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
