import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Aside = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: row;
    background: linear-gradient(90deg, #4e57e3 22%, #9b5df5 100%);
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Main = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Form = styled.form`
    width: 50%;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const TextFormh1 = styled.text`
    font-size: 1.4rem;
    color: #9b5df5;
    font-weight: bold;
    padding: 10px;
`

export const TextFormh1White = styled.text`
    font-size: 4rem;
    color: #fff;
    font-weight: bold;
    padding: 10px;
`

export const TextFormp = styled.text`
    font-size: 1rem;
    color: #ccc;
    font-weight: bold;
    padding: 10px;
`

export const Texthref = styled.a`
    width: 100%;
    text-decoration: none;
`

export const ButtonRegister = styled.div`
    width: 100%;
    margin: 7px 0;
    padding: 13px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background-color: #eb4b89;
    transition: opacity .3s;
    &:hover{
        opacity: .7;
    }
`;