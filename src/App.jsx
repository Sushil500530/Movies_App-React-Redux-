import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import MobileNavbar from "./components/mobile-navbar"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setBannerData, setImageURL } from "./features/movies-slice"

function App() {
  const dispatch = useDispatch();

  const fetchTrandingData = async()=> {
    try {
      const response = await axios.get('/trending/all/week');
      dispatch(setBannerData(response?.data?.results))
      // console.log("response data :", response?.data?.results)
    } catch (error) {
      console.log(error.message)
    }
  }


  const fetchConfiguration = async()=> {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response?.data?.images?.secure_base_url+"original"))
      console.log("response data :", response?.data?.images)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchTrandingData();
    fetchConfiguration();
  }, [])

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      {/* for mobile devices  */}
      <MobileNavbar />
    </main>
  )
}

export default App
