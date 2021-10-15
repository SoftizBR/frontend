/* eslint-disable jsx-a11y/anchor-is-valid */


import frame_1 from 'assets/icons/frame_1.png';
import frame_2 from 'assets/icons/frame_2.png';
import frame_3 from 'assets/icons/frame_3.png';
import frame_4 from 'assets/icons/frame_4.png';
import logo from 'assets/logo.png';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
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
				<li><Link to="/portifolio">Portifólio</Link></li>
				<li><Link to="/info">Dúvidas Frequentes</Link></li>
				<S.Button>
					Contatar
				</S.Button>
			</S.ListButton>
		</S.Header>
		<S.InfoWrapper>
				<S.Title>A melhor <strong>solução</strong><br/><strong>tecnológica</strong><br/>
				{' '}para o seu <strong>negócio</strong>.</S.Title>
				<hr />
				<S.SubTitle>A Softiz é uma startup focada no desenvolvimento
					de aplicações para pequenas, médias e grandes
					empresas.
				</S.SubTitle>
		</S.InfoWrapper>

		<S.InfoContainer>
			<S.Info>
				<S.Icon src={frame_1} />
				<br />
				<S.InfoTitle>Desenvolvimento <br /> Web</S.InfoTitle>
				<S.InfoSubTitle>Desenvolvemos páginas
					responsivas para todos
					os dispositivos.
				</S.InfoSubTitle>
			</S.Info>
			<S.Info>
				<S.Icon src={frame_2} />
				<br />
				<S.InfoTitle>Desenvolvimento Mobile</S.InfoTitle>
				<S.InfoSubTitle>Desenvolvemos aplicativos
					mobile usando Flutter ou React Native.
				</S.InfoSubTitle>
			</S.Info>
			<S.Info>
				<S.Icon src={frame_3} />
				<br />
				<S.InfoTitle>User Interface <br /> Design</S.InfoTitle>
				<S.InfoSubTitle>Desenvolvemos interfaces
					modernas, funcionais e intuitivas.
				</S.InfoSubTitle>
			</S.Info>
			<S.Info>
				<S.Icon src={frame_4} />
				<br />
				<S.InfoTitle>User Experience <br /> Design</S.InfoTitle>
				<S.InfoSubTitle>Trabalhamos para que os usuários tenham as melhores
					experiência possível.
				</S.InfoSubTitle>
			</S.Info>
		</S.InfoContainer>

		<S.ListTitle>Funcionalidades</S.ListTitle>

		<S.ListItem>
			<li><FaCheckCircle style={{marginRight: 20}} color={Theme.colors.primary} /> Sistema de geolocalização</li>
			<li><FaCheckCircle style={{marginRight: 20}} color={Theme.colors.primary} /> Aplicações offline</li>
			<li><FaCheckCircle style={{marginRight: 20}} color={Theme.colors.primary} /> Meios de pagamento</li>
			<li><FaCheckCircle style={{marginRight: 20}} color={Theme.colors.primary} /> Banco de dados</li>
			<li><FaCheckCircle style={{marginRight: 20}} color={Theme.colors.primary} /> Formulários</li>
			<li><FaCheckCircle style={{marginRight: 20}} color={Theme.colors.primary} /> QR Code e impressão digital</li>
		</S.ListItem>

		</>
	)
}

export default Main;


/*

*/
