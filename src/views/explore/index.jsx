import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"

export default function ExplorePage() {
  const params = useParams();
  console.log(params?.explore?.slice(0,2));
  const dispatch = useDispatch();
  const [tvsData,setTvsData]= useState([]);
  const [pageNumber,setPageNumber]= useState(1);
  const [totalPages,setTotalPages]= useState(0)



  const fetchTvsData = async()=> {
    try {
      const response = await axios.get(`/discover/${params?.explore}`,{
      params:{
      page:pageNumber
      }
      });
      // dispatch(setTvsData(response?.data?.images?.secure_base_url+"original"))
      console.log("response data :", response?.data?.results)
      setTvsData((preve)=> {
        return [
          ...preve,
          ...response?.data?.results
        ]
      })
      setTotalPages(response?.data?.total_pages)
      
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchTvsData();
  }, [])


  return (
    <div>
      ExplorePage Total page : {totalPages}
      </div>
  )
}
