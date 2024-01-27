import { useState, useEffect } from 'react'
import TitlePage from '../helper/TitlePage'
import Section from '../helper/Section'
import SidePageAndItems from '../helper/SidePageAndItems'

function Under100() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 0)
  }, [])
  


  if (loading) {
    return (
      <h1 className='grid place-items-center'>Loading...</h1>
    )
  }

    return (
      <Section>
        
     
         <TitlePage text='CANDLE COLLECTION UNDER $100' description={'Explore our budget-friendly candle selection – all under $100. From calming scents to stylish designs, find affordable candles to light up your space or gift to loved ones'} />
        <SidePageAndItems>
          <div className="w-full  flex flex-col gap-6">

          </div>
        </SidePageAndItems>
        
      </Section>
  )
}

export default Under100