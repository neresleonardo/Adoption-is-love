import React, { ReactNode } from 'react';
import { Aside, Container, TextH4, Textp, ButtonCreate } from './styles';

interface ICreate {
    titulo: string;
    text: string;
}

const Header: React.FC<ICreate> = ({
    titulo, text
}) => {
    return(
        <Container>
            <Aside>
                <TextH4>{titulo}</TextH4>
                <Textp>{text}</Textp>
            </Aside>
            <ButtonCreate onClick={() => ("")}>Registrar</ButtonCreate>
        </Container>
    );
}

export default Header;