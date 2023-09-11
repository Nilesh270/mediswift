import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Categories from '../components/Categories';


const Home = () => {
  return (
    <div>
      <Navbar/>
        <Categories Heading="Shop By Categories"/>
      <Footer/>
    </div>
  )
}

export default Home;
