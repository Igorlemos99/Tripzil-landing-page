import styled from "styled-components";

export const InfoContainer = styled.div`
    background: ${({AzulBg}) => (AzulBg ? "#F9FCFF" : "#fff")};
    
    @media screen and (max-width: 768px) {
        padding: 200px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 90%;
    max-width: 1000px;
    margin-right:auto;
    margin-left: auto;
    justify-content: center;  
`;

export const InfoLinha = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    grid-gap: 18px;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        padding: 0 24px;
    };
`;

export const Coluna1 = styled.div`
    margin-bottom: 2px;
    grid-area: col1;

    @media screen and (max-width: 768px){
        max-width: 400px;
    }
`;

export const Coluna2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;  
`;

export const InforTextoWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
    /* @media screen and (max-width: 768px) {
        padding-bottom: 90px;

    }; */
`;

export const InfoTopo = styled.p`
    color: #F6BE04;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 2px;
    padding-bottom: 15px;
`;

export const Heading = styled.h1`
    color: #28518F;
    font-weight: 600;
    font-size: 38px;
`;

export const Subtitulo = styled.p`
    font-size: 20px;
    color: #606060;
    padding-top: 20px;
`;

export const BotaoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Button = styled.button`
    margin-top: 30px;
    margin-bottom: 30px;
    background: #28518F;
    border: none;
    color: #fff;
    width: 60%;
    padding: 18px;
    font-size: 13px;
    border-radius: 5px;
    //text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 780px){
        width: 80%;
    }
    &:hover {
        background: #487AC6;
    }
`;



export const InfoImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const InfoImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
`;

