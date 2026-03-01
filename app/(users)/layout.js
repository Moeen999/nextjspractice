import Navigation from "@/components/NavigationBar";
import {Urbanist} from "next/font/google"
import { Work_Sans } from "next/font/google";
  const urbanist = Urbanist({
    subsets:["latin"],
    variable:"--font-Urbanist"
  })
    const worksans = Work_Sans({
    subsets:["latin"],
    variable:"--font-work-sans"
  })
export default function RootLayout({children}){
 return(
   <html lang="en">
    <body className={`${urbanist.variable} ${worksans.variable}`}>
      <Navigation/>
      {children}   
    </body>
  </html>
 )
}