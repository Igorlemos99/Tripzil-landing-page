import React from 'react';
import { Link } from 'react-router-dom';

import {HeroContainer,
             HeroMain,
             HeroContentFlex,
             HeroContentText,
             HeroH1,
             HeroH2,
             HeroP,
             HeroImgWrapper,
             HeroPromo,
             HeroIconesApp,
             ButtonHero,
             HeroH1Numero2,
             HeroP2,
             HeroIconeBrasil,           

} from './HeroElementos';

import ImagemHero from '../../images/apps.png';
import ImgWrapper from '../../images/hero_image.png';
import IconeBrasil from '../../images/mapbrasil.svg';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
                <HeroMain>
                    <HeroContentFlex>
                        <HeroContentText>
                            <HeroH1>Conheça o Brasil.</HeroH1>
                            <HeroH2>Viaje com segurança!</HeroH2>
                            <HeroP>Conheça as principais capitais e cidades do país, busque pelo seu destino e aproveite nossas promoções.</HeroP>
                            <HeroIconesApp src={ImagemHero}/>
                            <Link to='/cadastro'>
                                <ButtonHero>Obtenha agora</ButtonHero>
                            </Link>
                        </HeroContentText>
                    </HeroContentFlex>

                    <HeroImgWrapper src={ImgWrapper}/>
                </HeroMain>

                    <HeroPromo>
                        <HeroH1Numero2> <strong>Cultura nacional</strong>  a um toque do seu alcance</HeroH1Numero2>
                        <HeroIconeBrasil src={IconeBrasil}/>
                    </HeroPromo>
                    <HeroP2>Conheça as principais capitais e cidades do país, busque pelo seu destino e aproveite nossas promoções.</HeroP2>
                
        </HeroContainer>
    )
};

export default HeroSection;