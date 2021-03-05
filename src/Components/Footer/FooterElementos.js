import styled from "styled-components";


export const FooterContainer = styled.div`
    display: block;
    width: 90%;
    max-width: 1000px;
    margin: auto;
    align-items: center;
`;

export const FooterSecao1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const Secao1Comece = styled.div`
    width: 50%;
    max-width: 450px;

    @media screen and (max-width: 768px) {
        min-width: 90%;
        padding-bottom: 50px;
    }
`;

export const Secao2SocialMedia = styled.div`
    display: flex;
    padding-top: 20px;
    align-items: center;
`;

export const ImgMedia = styled.img`
    width: 12%;
    /* margin: 0 0 30px 0; */
    padding: 10px;
    margin-right: 15px;

    @media screen and(max-width: 768px) {
        width: 20%;
    }
`;

export const FooterFormulario = styled.form`
    width: 50%;
    padding: 100px 40px;
    background-color: #fff;
    box-shadow:  0px 1px 20px rgba(0, 0, 0, 0.09);
    display: flex;
    flex-direction: column;
    
    color: #28518F;

    margin-top: 30px;
    margin-bottom: 30px;
    
    
     @media screen and (max-width: 768px){
        width: 90%;
    } 
`;

export const FormularioH1 = styled.h1`
    font-weight: 800;
    font-size: 38px;
    padding-bottom: 30px;
    text-align: center;
`;

export const FooterP = styled.p`
    max-width: 400px;
    font-size: 17px;
    color: #606060;
    padding-bottom: 20px;
`;

export const FooterH1 = styled.h1`
    color: #28518F;
    font-weight: 800;
    font-size: 38px;
    padding-bottom: 30px;

    @media screen and (max-width: 760px) {
        padding-top: 50px;
    }
`;

export const FooterLabel = styled.label`
    padding: 10px;
`;

export const FooterInput = styled.input`
    border: 1px solid #AEAEAE;
    padding: 15px;
    width: 100%;
    
    outline: none;

    &:hover{
        border: 1px solid #28518F;
    }
`;

export const ButtonFooter = styled.button`
    margin-top: 30px;
    padding: 15px;
    border: none;
    background-color: #28518F;
    color: #fff;

    outline: none;

    transition: 200ms ease-in-out;

    &:hover{
        background-color: #4075C4;
    }
`;
























