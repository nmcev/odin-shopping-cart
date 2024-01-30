import { Link } from "react-router-dom"
import './helper/home.css'
function Home() {
    return (
        <main className=" h-dvh  relative ">
        <div className="flex flex-col justify-center items-center h-full ">
          <button className="
            bg-lilac hover:bg-li transition-all duration-300
            text-creamy font-black  py-2 px-4
            hover:text-zinc-700 md:mt-12 mt-8
            md:text-xl font-regPoppins w-48 h-12
            dark:bg-rose-300 dark:text-dark dark:hover:bg-rose-400 dark:hover:text-creamy
            ">
            <Link to='products' className="text-2xl ">SHOP NOW</Link>

           
          </button>
        </div>


      </main>
  )
}

export default Home