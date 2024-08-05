import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
import Categories from './components/Categories/Categories'
import Review from './components/Reviews/Review'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Categories />
      <Review />
      <Footer />
    </div>
  )
}

export default App
