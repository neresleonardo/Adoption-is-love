import styled, { css } from 'styled-components';

interface IContainerProps {
    menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    
    background-color: #0e1214;
    padding-left: 20px;
    position: relative;
    @media(max-width: 600px){
        padding-left: 20px;
        position: fixed;
        z-index: 2;
        width: 170px;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;
        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid #ccc;
        `};
    }
`;

export const Header = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogImg = styled.img`
    height: 60px;
    width: 60px;
    background: url("https://avatars.githubusercontent.com/u/14266075?v=4");
    background-size: cover;
    border-radius: 60px;
    border: 2px solid #ccc;
    padding: 0;
    @media(max-width: 600px){        
        display: none;
    }
`;

export const ProfileName = styled.div`
    width: 67%;
    display: flex;
    flex-direction: column;
    @media(max-width: 600px){        
        display: none;
    }
`
export const ProfileNameText = styled.text`
   font-size: 1rem;
   margin-left: 5px;
   color: white;
   font-weight: bold;
    @media(max-width: 600px){        
        display: none;
    }
`

export const ProfileNameP = styled.text`
   font-size: 0.7rem;
   margin-left: 5px;
   color: #ccc;
   font-weight: bold;
    @media(max-width: 600px){        
        display: none;
    }
`

export const Title = styled.h3`
    color: #40496c;
    margin-left: 10px;
    font-size: 1.7rem;
    @media(max-width: 600px){
        display: none;
    }
`;

export const MenuLabel = styled.h3`
    color: #40496c;
    margin-left: 6px;
    padding-bottom: 10px;
    @media(max-width: 600px){
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

export const MenuItemLink = styled.a`
    color: #a0a5b1;
    color: white;
    text-decoration: none;
    margin: 7px 0;
    display: flex;
    font-weight: bold;
    align-items: center;
    transition: opacity .3s;
    &:hover {
        opacity: .7;
        color: #ccc;
    }
    > svg {
        font-size: 30px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: #a0a5b1;
    
    border: none;
    background: none;
    margin: 7px 0;
    display: flex;
    align-items: center;
    transition: opacity .3s;
    &:hover {
        opacity: .7;
    }
    > svg {
        font-size: 30px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 35px;
    
    background-color: #ccc;
    color: white;
    transition: opacity .3s;
    &:hover{
        opacity: 0.7;
    }
    display: none;
    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;
    
    @media(max-width: 470px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`;