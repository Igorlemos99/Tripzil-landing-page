import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #fff;
    width: 90%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const HeroMain = styled.div`
    display: flex;
    justify-content: initial;
    align-items: center; 
    height: 90vh;
    position: relative;
    z-index: 1;
    
    @media screen and (max-width: 780px){
        flex-direction: column;
        padding-top: 60px;
        height: 790px;
    };
`;

export const HeroContentFlex = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
`;

export const HeroContentText = styled.div`
    /* padding: 30px; */

    @media screen and (max-width: 780px){
        text-align: center;
    };
`;

export const HeroInfoTopo = styled.p`
    color: #F6BE04;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 2px;
    padding-bottom: 15px;
`;

export const HeroH1 = styled.h1`
    max-width: 400px;
    color: #28518F;
    font-weight: 900;
    font-size: 38px;

    @media screen and (max-width: 780px){
        font-size: 36px;
    };
`;

export const HeroH2 = styled.h2`
    color: #28518F;
    font-weight: 400;
    font-size: 38px;
    
    @media screen and (max-width: 780px){
        font-size: 36px;
    };
    @media screen and (max-width: 480px){
        font-size: 32px;
    };
`;

export const HeroP = styled.p`   
    padding-top: 30px;
    padding-bottom: 25px;
    font-size: 17px;
    color: #606060;

    @media screen and (max-width: 780px){
        text-align: center;
        padding: 15px;
        padding-top: 26px;
        padding-bottom: 26px;
    };
`;

export const HeroImgWrapper = styled.img`
    width: 70%;
    margin: 0 0 10px 0;
    padding-right: 0;
    
    @media screen and (max-width: 965px){
        width: 50%;
    };
    
    @media screen and (max-width: 780px){
        order: -1;
        padding-bottom: 50px;
        width: 80%;
    };
`;



export const HeroIconesApp = styled.img`
    padding-bottom: 25px;
`;

export const ButtonHero = styled.button`
    background: #28518F;
    border: none;
    color: #fff;
    width: 55%;
    padding: 15px;
    font-size: 13px;
    border-radius: 5px;
    letter-spacing: 2px;
    outline: none;
    transition: 200ms ease-in-out;

    &:hover{
        background: #2C5FAC;
    };

    @media screen and (max-width: 780px){
        width: 80%;
    };
`;

export const HeroPromo = styled.div`
    display: flex;
    padding: 20px;

    @media screen and (max-width: 780px){
        flex-direction: column;
    };
`;

export const HeroH1Numero2 = styled.h1`
    color: #28518F;
    font-weight: 400;
    font-size: 26px;
    text-align: center;

`;

export const HeroP2 = styled.p`
    max-width: 500px;
    text-align: center;
    font-size: 17px;
    color: #606060;
    padding:15px;
    min-width: 300px;
    padding-bottom:100px;

    @media screen and (max-width: 780px){
        padding-top: -20px; 
    };
`;

export const HeroIconeBrasil = styled.img`
    height: 35px;
    padding-left: 20px;

    @media screen and (max-width: 768px){
        order: -1;
        padding-top: 30px;
        padding-bottom: 20px;

        height: 80px;
    };
`;




