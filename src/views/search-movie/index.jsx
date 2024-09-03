/* eslint-disable no-unsafe-optional-chaining */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Card from "../../components/card";

export default function SearchMovie() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();


  const fetchSearchData = async () => {
    try {
      const response = await axios.get(`/search/collection`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      // setData(response?.data?.results)
      console.log("response data :", response?.data?.results);
      setData((preve) => {
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
  }, [page]);

  useEffect(() => {
    setPage(1)
    setData([])
    fetchSearchData();
  }, [location?.search]);


  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prevPage) => prevPage + 1);
      fetchSearchData();
      console.log("scrolled to bottom");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="py-16 lg:px-10">
      <div className="lg:hidden w-full my-3 mx-4 sticky top-16 z-50">
        <input
        type="text" 
        name="searchInput" 
        onChange={(e)=>  navigate(`/search?q=${e.target.value}`)}
        className="rounded-full px-3 py-1 bg-neutral-800 text-neutral-300 w-full"
        placeholder="search here..."
        />
      </div>
      <div className="container mx-auto">
        <h2 className="text-lg lg:text-xl my-3 font-semibold capitalize">
          Search Results
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,270px)] gap-5 justify-center">
          {
            data?.length > 0 && data?.map((searchData, index) => {
              return <Card key={index + 15415} data={searchData} media_type={searchData?.media_type} />
            })
          }
        </div>
      </div>
    </div>
  )
}
