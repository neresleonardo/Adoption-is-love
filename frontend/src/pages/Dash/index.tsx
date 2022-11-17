import React from 'react';
import Header from '../../components/Header';
import ListAdoption from '../../components/ListAdoption';
import { Container, Content } from './styles';

const Dash: React.FC = () =>{
    return(
        <Container>
            <Content>
                 <Header titulo={'Seus cadastros'} text={'Aqui você pode registrar animais para que ele possa encontrar uma casa para morar'}></Header>
            </Content>
            <Content>
                <ListAdoption/>
                <ListAdoption/>
                <ListAdoption/>
            </Content>
        </Container>
    );
}

export default Dash;