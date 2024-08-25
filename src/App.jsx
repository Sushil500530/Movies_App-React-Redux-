import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import MobileNavbar from "./components/mobile-navbar"

function App() {

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
