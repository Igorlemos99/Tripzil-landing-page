import React from 'react';

import { FooterContainer,
         FooterSecao1,
         Secao1Comece,
         Secao2SocialMedia,
         FooterH1,
         FooterFormulario,
         FormularioH1,
         FooterP,
         ImgMedia,
         FooterInput,
         FooterLabel,
         ButtonFooter,       
        
        } from './FooterElementos'


import EmailImg from "../../images/assets/email.svg";
import TelImg from "../../images/assets/smartphone.svg";
import LocalImg from "../../images/assets/local.svg";


function Footer() {
    return (
        <>
            <FooterContainer id="contato">
                <FooterSecao1>
                    <Secao1Comece>
                        <FooterH1>Comece a usar</FooterH1>
                        <FooterP>Conheça as principais capitais e cidades do país, busque pelo seu destino e aproveite nossas promoções.</FooterP>
                        <Secao2SocialMedia>
                            <ImgMedia src={EmailImg}></ImgMedia>
                            <FooterP>contato@tripzil.com.br</FooterP> 
                        </Secao2SocialMedia>

                        <Secao2SocialMedia>
                            <ImgMedia src={TelImg}></ImgMedia>
                            <FooterP>1195385-8789</FooterP> 
                        </Secao2SocialMedia>

                        <Secao2SocialMedia>
                            <ImgMedia src={LocalImg }></ImgMedia>
                            <FooterP>São Paulo - SP, Brasil</FooterP> 
                        </Secao2SocialMedia>
                    </Secao1Comece>
                    
                        <FooterFormulario>
                            <FormularioH1>Conecte-se</FormularioH1>
                                <FooterLabel for="nome">Nome:</FooterLabel>
                                <FooterInput required type="text" id="nome" placeholder="Digite o seu nome"/>

                                <FooterLabel for="email">E-mail:</FooterLabel>
                                <FooterInput required type="email" id="email" placeholder="Digite o seu e-mail"/>

                                <ButtonFooter type="submit">Inscrever-se</ButtonFooter>

                            
                        </FooterFormulario>
                    
                </FooterSecao1>

                
                
            </FooterContainer>
        </>
    )
}

export default Footer;;
