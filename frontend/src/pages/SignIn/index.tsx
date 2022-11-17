import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Aside, ButtonRegister, Container, Form, Main, TextFormh1, TextFormh1White, TextFormp, Texthref } from './styles';

const SignIn: React.FC = () =>{
    return(
        <Container>
            <Aside>
                <TextFormh1White>
                    Adoption is love
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
                    placeholder="E-mail"
                    type="email"
                    
                    />
                    <Input 
                    placeholder="Senha"
                    type="password"
                    />
                    <Button type='submit'>Entrar</Button>
                    <Texthref href='/register'>
                        <ButtonRegister>Cadastro</ButtonRegister>
                    </Texthref>
                </Form>

            </Main>
        </Container>
    );
}

export default SignIn;