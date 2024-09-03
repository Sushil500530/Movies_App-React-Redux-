/* eslint-disable no-unsafe-optional-chaining */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Card from "../../components/card";

export default function SearchMovie() {
  const location = useLocation();
 
  const [data,setData] = useState([])
 console.log(data)

  const fetchSearchData = async () => {
    try {
      const response = await axios.get(`/search/collection`, {
        params: {
          query: location?.search?.slice(3),
          page: 1,
        },
      });
      console.log("response data :", response?.data?.results);
      setData((preve)=>{
        return [
          ...preve,
          ...response?.data?.results
        ]
      })
     
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSearchData();
  }, [location?.search]);

  return (
    <div className="py-16 lg:px-10">
    <div className="container mx-auto">
      <h2 className="text-lg lg:text-xl my-3 font-semibold capitalize">
        Search Results
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,270px)] gap-5 justify-center">
          {
            data?.length > 0 && data?.map((searchData,index)=>{
              return <Card key={index+15415} data={searchData} media_type={searchData?.media_type} />
            })
          }
        </div>
    </div>
  </div>
  )
}
