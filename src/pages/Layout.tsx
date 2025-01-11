import Hero from "@/components/common/Hero"
import { ReactNode } from "react"



function Home({children}:{children:ReactNode}) {
 

  return (
   <>
          <Hero  />
          {children}
   </>
     
  )
}

export default Home

