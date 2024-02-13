import React from 'react'
import style from './Landing.module.css'
import Navbar from './Components/Navbar'
import SideBar from './Components/SideBar'
import SlideShow from './Components/SlideShow'
import Slider from './Components/Slider'
import r1 from "../../Assets/r3.jpg"
import r2 from "../../Assets/r4.jpg"
import r3 from "../../Assets/r5.jpg"
import r4 from "../../Assets/r6.jpg"
import r5 from "../../Assets/r7.jpg"
import r6 from "../../Assets/r8.jpg"

import a1 from "../../Assets/a1.jpg"
import a2 from "../../Assets/a2.jpg"
import a3 from "../../Assets/a3.jpg"
import a4 from "../../Assets/a4.jpg"
import a5 from "../../Assets/a5.webp"
import a6 from "../../Assets/a6.webp"
import a7 from "../../Assets/a7.jpg"


import p1 from "../../Assets/p1.jpg"
import p2 from "../../Assets/p2.jpg"
import p3 from "../../Assets/p3.jpg"
import p4 from "../../Assets/p4.jpg"
import p5 from "../../Assets/p5.jpg"
import p6 from "../../Assets/p6.jpg"
import p7 from "../../Assets/p7.jpg"


import n1 from "../../Assets/n1.jpg"
import n2 from "../../Assets/n2.jpg"
import n3 from "../../Assets/n3.jpg"
import n4 from "../../Assets/n4.jpg"
import n5 from "../../Assets/n5.jpg"


const Landing = () => {

  const recommended=[r1,r2,r3,r4,r5,r6]
  const animated=[a1,a2,a3,a4,a5,a6,a7]
  const popular=[p1,p2,p3,p4,p5,p6,p7]
  const upcoming=[n1,n2,n3,n4,n5]
  
  return (
    <div className={style.LandingContainer}>
      <Navbar />
      <SideBar>
        <SlideShow />
        {/* <Slider images={recommended} title="Recommended For You" />
        <Slider images={animated} title="Animated Adventures" />
        <Slider images={popular} title="Popular Shows" />
        <Slider images={upcoming} title="New And Upcoming Shows" /> */}
      </SideBar>
    </div>
  )
}

export default Landing