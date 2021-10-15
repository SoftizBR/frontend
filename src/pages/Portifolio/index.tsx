/* eslint-disable jsx-a11y/anchor-is-valid */


import logo from 'assets/logo.png';
import PortItem from 'components/PortItem';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import * as S from './styles';



const Main: React.FC = () => {

	const Theme = useTheme();
	const history = useHistory();

	return (
		<>
		<S.Header>
			<S.Logo onClick={() => history.push("/")} src={logo} />
			<S.ListButton>
				<li><Link to="/">Quem Somos</Link></li>
				<li><Link to="/portifolio">Portifólio</Link></li>
				<li><Link to="/">Dúvidas Frequentes</Link></li>
				<S.Button onClick={()=> window.open("https://api.whatsapp.com/send/?phone=5581996509220")}>
					Contatar
				</S.Button>
			</S.ListButton>
		</S.Header>

		<S.GridContainer>
			<PortItem>1</PortItem>
		</S.GridContainer>
		</>
	)
}

export default Main;


/*

*/
