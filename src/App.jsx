import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import Switcher from "./Switcher"
import { useLocation } from "react-router-dom"
function App() {
  const location = useLocation().pathname
  return ( 
    <>
    <Header />
      <Outlet />
      <div className={`flex flex-col items-center transition duration-200  absolute  bottom-96 mb-32 ${location === '/' && "bg-black p-2 "}`}>
        <Switcher />
        </div>
    <Footer />
    </>
 ) 
  
}

export default App
