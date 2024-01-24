import TitlePage from "../helper/TitlePage"
import Section from "../helper/Section"
import SidePageAndItems from "../helper/SidePageAndItems"
function AllProducts() {
  const description = 'Explore our curated collection – diverse, versatile items for every need. From essentials to unique finds, discover quality products suitable for gifting.'
    return (
    <Section >
        
      <TitlePage text="All Products" description={description} />

       <SidePageAndItems>
          <div className=" bg-red-500">
                <h1>All Products</h1>
          </div>
        </SidePageAndItems>
        
    </Section>
  )
}

export default AllProducts