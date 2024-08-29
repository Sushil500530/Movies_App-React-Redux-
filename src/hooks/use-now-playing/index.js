import axios from "axios";
import { useState, useEffect } from "react";

  export default function useNowPlayingData() {
    const [nowPlayingData, setNowPlayingData]= useState([]);
  
    const nowFetchData = async()=> {
        try {
          const response = await axios.get('/movie/now_playing');
          setNowPlayingData(response?.data?.results)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(()=> {
        nowFetchData();
      },[])
   
      return nowPlayingData;
  }
  