import TitlePage from "../helper/TitlePage"
import Section from "../helper/Section"
import SidePageAndItems from "../helper/SidePageAndItems"
import img from "../../../assets/images/allProducts.jpg"
import { useCart } from "../../../hooks/CartContext"
import ItemsCard from "../helper/ItemsCard"
import { v4 as uuidv4 } from 'uuid'
import ItemsContainer from "../helper/ItemsContainer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

function AllProducts() {
  const { data30, data50, data100 } = useCart()
  const data = data30.concat(data50, data100);

  useEffect(() => {
    AOS.init();
  }, [])
  
  const dataStored = data.sort(() => Math.random() - Math.random()).slice(0, 4);
  const description = 'Explore our curated collection – diverse, versatile items for every need. From essentials to unique finds, discover quality products suitable for gifting.'
    return (
    <Section >
        
    <TitlePage text="All Products" description={description} />

    <SidePageAndItems>
        <div className="w-10/12 flex justify-center pb-8 relative">
         <img src={img} alt="Candle and planets" className="w-full max-w-4xl max-h-80 object-cover object-center rounded-lg shadow-lg z-10" />
          <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-creamy z-20 text-2xl font-bold font-poppins bg-black p-2  max-sm:text-lg text-center max-sm:max-w-80 ">
                Candles are a great way to bring fragrance into your home.
              </p>
          </div>
          </div>
        
          <div className=" text- w-10/12 flex flex-col items-center  max-sm:items-start max-sm:pt-6 max-sm:pl-6 pb-24">
            <h3 className="text-2xl  font-bold font-poppins text-dimGray max-sm:text-lg dark:text-white ">Our Products</h3>
            <p className="text-dark max-sm:text-start text-center max-sm:text-sm max-w-2xl pt-2 dark:text-creamy font-montserrat-reg">Explore our curated collection – diverse, versatile items for every need. From essentials to unique finds, discover quality products suitable for gifting.</p>
          </div>

          <ItemsContainer>

            {dataStored.map((item) => (

              <div key={uuidv4()} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="false">
                <ItemsCard key={uuidv4()} {...item} />
              </div>
            )
            )}


          </ItemsContainer>
     </SidePageAndItems>  
  </Section>
  )
}

export default AllProducts