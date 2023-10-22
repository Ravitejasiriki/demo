import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import WomenCollection from '../components/womenCollection'
import Footer from '../components/Footer'

import{Gents,Ladies} from '../data'
import { useState } from 'react'

const Mainpage = () => {
    const [gentsFashion,setGentsFashion]=useState(Gents)
    const[ladiesFashion,setLadiesFashion]=useState(Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collection gentsFashion= {gentsFashion}/>
      <WomenCollection ladiesFashion={ladiesFashion}/>
      <Footer/>
    </div>
  )
}

export default Mainpage
