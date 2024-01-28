import { useParams } from 'react-router-dom';
import TitlePage from '../helper/TitlePage'
import Section from '../helper/Section'
import SidePageAndItems from '../helper/SidePageAndItems'
import { Spinner } from '@chakra-ui/react'
import ItemsCard from '../helper/ItemsCard'
import ItemsContainer from '../helper/ItemsContainer'
import ItemInfo from '../helper/ItemInfo';
import { useCart } from '../../../hooks/CartContext';

function Under30() {
  const { id } = useParams(); 
  const { data30, numberOfItems, handleIncrease, handleDecrease, handleAddToCart, loading } = useCart();
  

  if (loading) {
    return (
      <div className='grid place-items-center h-dvh'>
      <Spinner
       thickness='4px'
         speed='0.65s'
         emptyColor='gray.200'
         color='gray.500'
        size='xl'
        />
        </div>
    )
  }

    return (
      <Section>
        
     
         <TitlePage />
        <SidePageAndItems>
          {/* if the is undefined, it shows all the items. If it not then it will show the element that the user clicked on */}
          {id === undefined && data30[id] === undefined ? (
            <ItemsContainer>
              {
                data30.map((item) => {
                  const { name, price, img, id, category } = item;

                  return (
                    <ItemsCard  name={name} price={price} img={img} id={id} category={category} key={id}/>
                  )
                }) 
              }
            </ItemsContainer>  
            
            ) :
             data30[id] ? ( 
              <ItemInfo data={data30} id={id} 
                handleAddToCart={handleAddToCart}
                numberOfItems={numberOfItems}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
              />
            ) :
              (
                <h1 className='grid place-items-center text-20 font-Nunito font-black'>Not Found</h1>
              )
        }
        </SidePageAndItems>
        
      </Section>
  )
}

export default Under30