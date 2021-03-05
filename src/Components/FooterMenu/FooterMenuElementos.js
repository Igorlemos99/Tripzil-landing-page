import styled from "styled-components";

export const FooterSecao2 = styled.div`
    background-color: #28518F;
    width: 100%;
`;

export const Secao2Flex = styled.div`
    width: 90%;
    max-width: 1000px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    padding-top: 60px;
    
`;

export const Secao2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const Secao2LogoH1 = styled.h1`
    font-family: 'Libre Baskerville', serif;
    font-size: 35px;
    color: #9EB0CC;
    
    padding-bottom: 30px;
`;

export const Secao2Logo= styled.div`
max-width: 300px;
`;

export const Secao2H1 = styled.h1`
    font-size: 20px;
    color: #9EB0CC;

    padding-top: 20px;
    padding-bottom: 30px;
`;

export const Secao2P = styled.p`
    font-weight: 300;
    font-size: 12px;
    color: #9EB0CC;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;

export const Secao2Sobre = styled.div`
    padding-left: 40px;
    
    @media screen and (max-width: 768px){
        padding-left: 0;
    }
`;

export const Secao2Menu = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;    
    padding-top: 70px;
    padding-bottom: 50px; 

     @media screen and (max-width: 768px){
        margin: auto;

        display: grid;   
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 468px){
        grid-template-columns: 1fr 1fr;
    }
`;

export const MenuItem = styled.li`
    list-style: none;
    padding-bottom: 40px;
    font-size: 12px;
    color: #9EB0CC;

    &:hover{
        color: #6D809E;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const SecaoIconsMedia = styled.section`
    display: flex;
    padding-top: 30px;

    img {
        padding-left: 30px;

        @media screen and (max-width: 768px) {
            padding-left: 0;
            padding-right: 30px;
    }
        }
`;

