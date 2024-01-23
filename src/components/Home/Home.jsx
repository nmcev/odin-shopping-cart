import { Link } from "react-router-dom"
function Home() {
    return (
        <main className="bg-home bg-no-repeat bg-cover bg-center h-dvh ">
        <div className="flex flex-col justify-center items-center h-full ">
          <button className="
            bg-lilac hover:bg-li transition-all duration-300
            text-creamy font-black  py-2 px-4
            hover:text-zinc-700 md:mt-12 mt-8
            md:text-xl font-regPoppins w-48 h-12
            ">
            <Link to='products' className="text-2xl ">SHOP NOW</Link>
          </button>
        </div>
      </main>
  )
}

export default Home