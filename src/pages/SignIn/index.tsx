import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import {Wrapper, Background, InputContainer, ButtonContainer} from './styles';

import background from '../../assets/images/background-login.jpg';
import logo from '../../assets/images/gualter.png';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import useAuth from '../../hooks/useAuth';

const SignIn = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const { userSignIn } = useAuth();

	const handleToSingIn = async () => {
		const data = {
			email,
      password,
		}

		const response = await userSignIn(data);
		
		if (response.id) {
			navigate('/dashboard')
			return;
		}

		alert('User or password incorrect');
	}

	return (
			<Wrapper>
				<Background image={background}/>
				<Card width="403px" height="auto">
						<img src={logo} height={45} alt="logo gualter bank" />

						<InputContainer>
								<Input 
									placeholder="EMAIL" 
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Input 
									placeholder="SENHA" 
									type="password" 
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
						</InputContainer>

						<ButtonContainer>
								<Button type="button" onClick={handleToSingIn}>ENTRAR</Button>
								<p>Ainda não tem cadastro? <Link to="/signup">Cadastre-se Já</Link></p>
						</ButtonContainer>
				</Card>
		</Wrapper>
	)
}

export default SignIn;
