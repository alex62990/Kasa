import React from "react";
import Banner from '../../components/banner'
import imgAproposBanner from '../../assets/image/imgAproposBanner.png'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Collapse from '../../components/collapse'
import CollapseData from '../../data/collapses.json'

const Apropos = () => {
    return (
        <div className="a-propos">
            <Header />
            <main>
                <Banner title="" image={imgAproposBanner} />
                
                <div className="collapse">
                    <div className="collapse__dropdown">
                        {CollapseData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <Collapse content={item.content} title={item.title} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Apropos