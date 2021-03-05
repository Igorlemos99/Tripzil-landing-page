import React from 'react';
import GlobalStyle from './GlobalStyle';

import Navbar from '../Navbar';
import HeroSection from '../Components/HeroSection';
import Secoes from '../Components/Secoes';
import { homeObjDois, homeObjTres, homeObjUm } from '../Components/Secoes/Dados';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import FooterMenu from '../Components/FooterMenu';

export default function Home() {
    return (
        <div>
            <>
            <GlobalStyle />
            <Navbar />
            <HeroSection />
            <Secoes {...homeObjUm} /> 
            <Secoes {...homeObjDois} />
            <Services />
            <Secoes {...homeObjTres} />
            <Footer />
            <FooterMenu />
            </>
        </div>
    )
};

