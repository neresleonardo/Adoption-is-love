import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Aside, Container, Form, Main, TextFormh1, TextFormh1White, TextFormp } from './styles';

const Register: React.FC = () =>{
    return(
        <Container>
            <Aside>
                <TextFormh1White>
                    Registro
                </TextFormh1White>
            </Aside>
            <Main>
                <Form>
                    <TextFormh1>
                        Seja muito bem-vindo(a)
                    </TextFormh1>
                    <TextFormp>
                        Adote um animal abandonado e veja a felicidade nascer na sua casa
                    </TextFormp>
                    <Input
                    placeholder="Nome"
                    type="name"
                    />
                    <Input
                    placeholder="E-mail"
                    type="email"
                    />
                    <Input 
                    placeholder="Senha"
                    type="password"
                    />
                    <Button type='submit'>Registrar</Button>
                </Form>

            </Main>
        </Container>
    );
}

export default Register;