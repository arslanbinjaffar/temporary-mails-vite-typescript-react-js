import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"
import Hero from "@/components/common/Hero"
import { ReactNode } from "react"



function Home({children}:{children:ReactNode}) {
 

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero  />
          {children}
        </main>
        <Footer />
      </div>
  )
}

export default Home

