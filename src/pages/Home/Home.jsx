import React from 'react';
import Banner from '../../components/banner'
import imgHomeBanner from '../../assets/image/imgHomeBanner.png'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Gallery from '../../components/gallery'

const Home = () => {
    return (
        <div className='home'>
            <Header />    
            <main>
                <Banner text="Chez vous, partout et ailleurs" image={imgHomeBanner}/> 
                <Gallery />
            </main>
            <Footer />
        </div>
    );
};

export default Home;