/* eslint-disable jsx-a11y/anchor-is-valid */


import logo from 'assets/logo.png';
import PortItem from 'components/PortItem';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import * as S from './styles';


const Main: React.FC = () => {

	const Theme = useTheme();

	return (
		<>
		<S.Header>
			<S.Logo src={logo} />
			<S.ListButton>
				<li><Link to="/info">Quem Somos</Link></li>
				<li><Link to="/info">Portifólio</Link></li>
				<li><Link to="/info">Dúvidas Frequentes</Link></li>
				<S.Button>
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
