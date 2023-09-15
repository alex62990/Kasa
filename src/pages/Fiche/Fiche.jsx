import React from "react";
import Header from "../../components/header"
import Footer from "../../components/footer"
import FicheLogement from "../../components/ficheLogement"

const Fiche = () => {
    return (
        <div className="fiche-logement">
            <Header />
            <main>
                <FicheLogement />
            </main>
            <Footer />
        </div>
    )
}

export default Fiche
