
import React, {useState} from 'react';

import {
    MdDashboard,
    MdExitToApp,
    MdClose,
    MdMenu,
} from 'react-icons/md';

import { 
    Container,
    Header,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    MenuLabel,
    LogImg,
    ProfileName,
    ProfileNameText,
    ProfileNameP,
    ToggleMenu,
}  from './styles';

  export function Aside() {

    const [toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
    
    

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>

                <LogImg>

                </LogImg>
                <ProfileName>
                    <ProfileNameText>name</ProfileNameText>
                    <ProfileNameP>Bem vindo</ProfileNameP>
                </ProfileName>

                <ToggleMenu onClick={handleToggleMenu}>
                { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>
            </Header>

            <MenuContainer>

                <MenuLabel>Menu</MenuLabel>
                <MenuItemLink href="/">
                    <MdDashboard />
                    Seus Cadastros
                </MenuItemLink>

                <MenuItemLink href="/annotation">
                    <MdDashboard />
                    Animais adotados
                </MenuItemLink>

                <MenuItemLink href="/config">
                    <MdDashboard />
                    Configurações
                </MenuItemLink>

                <MenuItemButton onClick={() => ("")}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>

        </Container>
    );
}