import axios from "axios";
import { useState,useEffect } from "react";

export const useFetchData = (endpoint)=> {
    const [data, setData] = useState([]);
    const [loading,setLoading]= useState(false);

    const fetchData = async()=> {
        setLoading(true)
        try {
          const response = await axios.get(endpoint);
          setData(response?.data?.results)
        } catch (error) {
          console.log("error",error)
        }
      }
    
      useEffect(()=> {
        fetchData();
      },[])

    return {data,loading}
}