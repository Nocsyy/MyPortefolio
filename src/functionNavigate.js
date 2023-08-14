import React from 'react';
import Navigation from './components/navigation/navigation';
import Error from './components/error/error';
import Footer from './components/footer/footer';
import Acceuil from './pages/acceuil';
import SecondNav from './components/secondNav/secondNav';

export function AcceuilWithFooterAndNavigation() {
    return (
        <div>
            <Navigation />

            <Acceuil />
            <Footer />
        </div>
    );
}

export function ErrorWithFooterAndNavigation() {
    return (
        <div>
            <Navigation />
            <Error />
            <Footer />
        </div>
    );
}


