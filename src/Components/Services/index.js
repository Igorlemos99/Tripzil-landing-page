import React from 'react'

import Imagem1 from '../../images/asset/undraw_journey_lwlj.svg';
import Imagem2 from '../../images/asset/undraw_travel_mode_7sf4.svg'
import Imagem3 from '../../images/asset/undraw_travel_plans_li01.svg'

import {
        ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP

} from './ServicesElements'

function Services() {
    return (
        <>
        <ServicesContainer id='experiencia'>
            <ServicesH1>Experiência</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Imagem1}/>
                    <ServicesH2>Lugares</ServicesH2>
                    <ServicesP>Viva momentos inesquecíveis conhecendo o Brasil.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Imagem2}/>
                    <ServicesH2>Momentos</ServicesH2>
                    <ServicesP>Viva momentos inesquecíveis conhecendo o Brasil.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Imagem3}/>
                    <ServicesH2>Diversão</ServicesH2>
                    <ServicesP>Viva momentos inesquecíveis conhecendo o Brasil.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>

    )
}

export default Services
