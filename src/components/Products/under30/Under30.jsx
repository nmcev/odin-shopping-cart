import { useState, useEffect } from 'react'
import TitlePage from '../helper/TitlePage'
import Section from '../helper/Section'
import SidePageAndItems from '../helper/SidePageAndItems'

function Under30() {
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
        
     
         <TitlePage />
        <SidePageAndItems>
          <div className="w-full  flex flex-col gap-6">

          </div>
        </SidePageAndItems>
        
      </Section>
  )
}

export default Under30