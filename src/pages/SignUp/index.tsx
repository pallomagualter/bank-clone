import {Wrapper, Background, InputContainer, ButtonContainer} from './styles';
import { useNavigate, Link } from 'react-router-dom';

import background from '../../assets/images/background-login.jpg';
import logo from '../../assets/images/gualter.png';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = () => {
    const navigate = useNavigate();

    const handleToSingIn = () => {
        navigate('/dashboard')
    }
    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px" height="auto">
                <img src={logo} height={45} alt="logo gualter bank" />

                <InputContainer>
                    <Input placeholder="NOME"/>
                    <Input placeholder="SOBRENOME"/>
                    <Input placeholder="EMAIL"/>
                    <Input placeholder="SENHA" type="password"/>
                    <Input placeholder="CONFIRMAR SENHA" type="password"/>
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSingIn}>CADASTRE-SE</Button>
                    <p>Já tem uma conta? <Link to="/signin">Entre Já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp;
