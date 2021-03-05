import React from 'react';

import { InfoContainer,
         InfoWrapper,
         InfoLinha,
         Coluna1,
         InforTextoWrapper,
         InfoTopo,
         Heading,
         Subtitulo,
         BotaoWrapper,
         Button,
         Coluna2,
         InfoImgWrapper,
         InfoImg } from './InfoElementos';

function SecaoInformacoes({id,
                           imgStart,
                           infoTopo,
                           headLine,
                           descricao,
                           img,
                           alt,
                           AzulBg,
                           tituloBotao}) {
    return (
        <>
            <InfoContainer AzulBg={AzulBg} id={id}>
                <InfoWrapper>
                    <InfoLinha imgStart={imgStart}>
                        <Coluna1>
                            <InforTextoWrapper>
                                <InfoTopo>{infoTopo}</InfoTopo>
                                <Heading>{headLine}</Heading>
                                <Subtitulo>{descricao}</Subtitulo>
                                <BotaoWrapper>
                                    <Button>{tituloBotao}</Button>
                                </BotaoWrapper>
                            </InforTextoWrapper>
                        </Coluna1>   
                        <Coluna2>
                                <InfoImgWrapper>
                                    <InfoImg src={img} alt={alt}/>
                                </InfoImgWrapper>
                            </Coluna2>                        
                    </InfoLinha>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default SecaoInformacoes;
