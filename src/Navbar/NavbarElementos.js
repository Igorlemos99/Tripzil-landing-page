import styled from 'styled-components';

export const NavbarContainer = styled.div`
        background: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.030);
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        position: sticky;
        top: 0;
        z-index: 999;
        position: sticky;
    
        .container {
            z-index: 1;
            width: 100%;
            max-width: 1300px;
            justify-content: space-around;
            margin-right: auto;
            margin-left: auto;
            padding-right: 50px;
            padding-left: 50px;
        }

        .navbar-container {
            display: flex;
            justify-content: space-between;
            height: 80px;
            align-items: center;
        }

        .navbar-logo {
            cursor: pointer;
            text-decoration: none;
        }
        .menu-icon {
            display: none;
            color: red;

            @media screen and (max-width: 960px){
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(-100%, 60%);
                font-size: 1.8rem;
                cursor: pointer;
                }
        }

        .nav-menu {
            display: flex;
            align-items: center;
            justify-content: center;
            list-style: none;
            text-align: center;

            @media screen and (max-width: 960px){
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 90vh;
                position: absolute;
                top: 80px;
                left: -10%;
                opacity: 1;
                transition: all 0.5s ease;
            }
        }

        .active {
            @media screen and (max-width: 960px){
                background: #1c2237;
                left: 0;
                top: 80px;
                opacity: 1;
                transition: all 0.6s ease;
                z-index: 1;
            }
        }

        .nav-item {
            /* height: 80px; */
            border-bottom: 2px solid transparent;
            
            &:hover {
                border-bottom: 2px solid #f00946;
            }
        }
        .nav-links {
            color: #000;
            display: flex;
            align-items: center;
            text-decoration: none;
            padding-left: 1rem ;
            height: 100%;

            @media screen and (max-width: 960px){
                text-align: center;
                align-items: center;
                justify-content: center;
                width: 100%;
                display: table;

                &:hover {
                color: #f00946;
                transform: scale(1.2);
                transition: all 0.3s ease;

                }
            }
        }
        .nav-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 120px;
    }




`;




// import { Link as LinkReact } from 'react-router-dom'
// import { Link as LinkScroll} from 'react-scroll'


// export const Nav = styled.div`
//     background-color: white;
//     height: 80px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 2rem;
//     position: sticky;
//     top: 0;
//     z-index: 10;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.050);
// `;

// export const NavbarContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 80px;
//     z-index: 1;
//     width: 100%;
//     padding: 0 24px;
//     max-width: 1000px;
// `;

// export const NavLogo = styled.div`
//     color: #F6BE04;
//     font-size: 40px;
//     display: flex;
// `;

// export const LogoInicio = styled.div`
//     color: #2FC283;
// `;

// export const IconeHamburguer = styled.div`
//     display: none;

//     @media screen and (max-width: 768px){
//         display: block;
//         position: absolute;
//         padding-top: 2px;
//         top: 0;
//         right: 0;
//         transform: translate(-100%, 60%);
//         font-size: 1.8rem;
//         cursor: pointer; 
//         color: #28518F;
//     }
// `;

// export const NavMenu = styled.ul`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     list-style: none;
//     text-align: center;

//     @media screen and ( max-width: 768px){
//       display: flex;
//       flex-direction: column;
//       width: 100%;
//       height: 90vh;
//       position: absolute;
//       top: 80px;
//       left: -100%;
//       padding-top: 50px;
//       opacity: 1;
//       transition: all 0.5s ease;
//     }
// `;

// export const Active = styled.ul`
//       background: #1c2237;
//       left: 0;
//       opacity: 1;
//       transition: all 0.6s ease;
//       z-index: 1;

// `;


// export const NavItem = styled.li`
//     height: 80px;
//     list-style: none;
// `;

// export const NavLinks = styled(LinkScroll)`
//     color: #6B6B6B;
//     display: flex;
//     font-size: 15px;
//     font-family: "Roboto";
//     justify-content: center;
//     align-items: center;
//     text-decoration: none;
//     padding: 30px 1rem;
//     cursor: pointer;

//     &:active{
//         border-bottom: 3px solid #28518F;
//         color: #28518F;
//     }
// `;

//  export const Button = styled.button`
//     background-color: #28518F;
//     padding: 10px 20px;
//     color: white;
//     letter-spacing: 1px;
//     border: none;
//     border-radius: 5px;
//     margin-top: 20px;
//     margin-left: 10px;
//     outline: none;
//     transition: 0.3s ease-out;

//     &:hover{
//         background-color: #2D5DA5;
//     }
//  `;