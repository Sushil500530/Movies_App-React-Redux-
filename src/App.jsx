import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import MobileNavbar from "./components/mobile-navbar"
import axios from "axios"
import { useEffect } from "react"

function App() {

  const fetchTrandingData = async()=> {
    try {
      const response = await axios.get('/trending/all/week');
      console.log("response data :", response)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchTrandingData();
  }, [])

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      {/* for mobile devices  */}
      <MobileNavbar />
    </main>
  )
}

export default App
