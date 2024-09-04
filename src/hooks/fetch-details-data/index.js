import axios from "axios";
import { useState,useEffect } from "react";

export const useFetchDetailsData = (endpoint)=> {
    const [data, setData] = useState([]);
    const [loading,setLoading]= useState(false);

    const fetchDetailsData = async()=> {
        setLoading(true)
        try {
          const response = await axios.get(endpoint);
          setData(response?.data)
        } catch (error) {
          console.log("error",error)
        }
      }
    
      useEffect(()=> {
        fetchDetailsData();
      },[])

    return {data,loading}
}