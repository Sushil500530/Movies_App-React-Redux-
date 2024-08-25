import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {

  return (
    <main>
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App
