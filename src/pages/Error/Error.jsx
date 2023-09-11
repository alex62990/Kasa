import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import ErrorPage from '../../components/errorpage'

const Error = () => {
    return (
        <div className='error-page'>
            <Header />
            <main>
                <ErrorPage />
            </main>
            <Footer />
        </div>
    )
}

export default Error