import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Categories from '../components/Categories';


const Home = () => {
  return (
    <div>
      <Navbar/>
        <Categories Heading="Shop By Categories" CategoryType="CategoryData"/>
        <Categories Heading="Trending Brands" CategoryType="FeatureBrand"/>
        <Categories Heading="Offers" CategoryType="Offers"/>
      <Footer/>
    </div>
  )
}

export default Home;
