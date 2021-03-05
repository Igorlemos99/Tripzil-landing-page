import React from 'react';

import { FooterSecao2,
         Secao2Flex,
         Secao2,
         Secao2Menu,
         Secao2Logo,
         Secao2Sobre,
         MenuItem,
         Secao2H1,
         Secao2P,
         Secao2LogoH1,
         SecaoIconsMedia
         } from "./FooterMenuElementos";

import FacebookIcon from "../../images/icons/facebook.svg";
import InstagramIcon from "../../images/icons/instagram.svg";
import WhatsAppIcon from "../../images/icons/whatsapp.svg";
import { Link } from 'react-scroll';


function FooterMenu() {
    return (
        <>
            <FooterSecao2>
                <Secao2Flex>
                    <Secao2>
                        <Secao2Logo>
                            <Secao2LogoH1>tripzil</Secao2LogoH1>
                            <Secao2P>Conheça as principais capitais e cidades do país, busque pelo seu destino e aproveite nossas promoções.</Secao2P>
                        </Secao2Logo>

                        <Secao2Sobre>
                            <Secao2H1>Sobre nós</Secao2H1>
                            <Secao2P>Conheça as principais capitais e cidades do país, busque pelo seu destino e aproveite nossas promoções.</Secao2P>
                        </Secao2Sobre>

                        <SecaoIconsMedia>
                                <img alt='Face' src={FacebookIcon} />
                                <img alt='Face' src={InstagramIcon} />
                                <img alt='Face' src={WhatsAppIcon} />
                        </SecaoIconsMedia>
                    </Secao2>

                    <Secao2Menu>
                        <MenuItem><Link to='home'>Home</Link></MenuItem>
                        <MenuItem><Link to='plataformas'>Plataforma</Link></MenuItem>
                        <MenuItem><Link to='programas'>Programas</Link></MenuItem>
                        <MenuItem><Link to='experiencia'>Experiência</Link></MenuItem>
                        <MenuItem><Link to='parceiros'>Parceiros</Link></MenuItem>
                        <MenuItem><Link to='contato'>Contato</Link></MenuItem>
                    </Secao2Menu>
                    
                </Secao2Flex>
            </FooterSecao2>
        </>
    )
}

export default FooterMenu;
