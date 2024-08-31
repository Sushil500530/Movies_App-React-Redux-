import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/card";

export default function ExplorePage() {
  const params = useParams();
  console.log(params?.explore?.slice(0, 2));
  const dispatch = useDispatch();
  const [tvsData, setTvsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchTvsData = async () => {
    try {
      const response = await axios.get(`/discover/${params?.explore}`, {
        params: {
          page: pageNumber,
        },
      });
      // dispatch(setTvsData(response?.data?.images?.secure_base_url+"original"))
      console.log("response data :", response?.data?.results);
      setTvsData((preve) => {
        return [...preve, ...response?.data?.results];
      });
      setTotalPages(response?.data?.total_pages);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNumber((prevPage) => prevPage + 1);
      fetchTvsData();
      console.log("scrolled to bottom");
    }
  };

  useEffect(() => {
    fetchTvsData();
  }, [pageNumber]);

  useEffect(() => {
    setPageNumber(1)
    setTvsData([])
    fetchTvsData()
  }, [params?.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16 lg:px-10">
      <div className="container mx-auto">
        <h2 className="text-lg lg:text-xl my-3 font-semibold capitalize">
          Popular {params?.explore} show
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,270px)] gap-5">
          {
            tvsData?.length > 0 && tvsData?.map((data,index)=>{
              return <Card key={index+15415} data={data} media_type={params?.explore}/>
            })
          }
        </div>
      </div>
    </div>
  );
}
