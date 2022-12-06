import {HeaderContainer, HeaderWrapper, UserInfo} from './styles';
import UserCircle from '../UserCircle';

import logo from '../../assets/images/gualter.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
   
    const navigate = useNavigate();

    const handleLogoff = () => {
        navigate('/signin')
    }
    return (
        <HeaderContainer>
            <HeaderWrapper>
                   <img src={logo} height={45} alt="logo gualter bank" />
                <UserInfo>
                  <UserCircle initials="PG" />
                  <div>
                      <p>Olá, <span className="primary-color font-bold">Palloma</span></p>
                      <strong>22001123-1</strong><br/>
                      <a href="#" onClick={handleLogoff}>Sair</a>
                  </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header