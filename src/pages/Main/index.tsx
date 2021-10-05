/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from 'assets/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Main: React.FC = () => {
	return (
		<>
		<S.Header>
			<S.Logo src={logo} />
			<S.ListButton>
				<li>

				<Link to="/info">Quem Somos</Link>

				</li>
				<li><Link to="/info">Portifólio</Link></li>
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
				<S.InfoTitle>Desenvolvimento Web</S.InfoTitle>
				<S.InfoSubTitle>Desenvolvemos páginas
					responsivas para todos
					os dispositivos.
				</S.InfoSubTitle>
			</S.Info>
			<S.Info>
				<S.InfoTitle>Desenvolvimento Mobile</S.InfoTitle>
				<S.InfoSubTitle>Desenvolvemos aplicativos
					mobile usando Flutter ou React Native.
				</S.InfoSubTitle>
			</S.Info>
			<S.Info>
				<S.InfoTitle>User Interface Design</S.InfoTitle>
				<S.InfoSubTitle>Desenvolvemos interfaces
					modernas, funcionais e intuitivas.
				</S.InfoSubTitle>
			</S.Info>
			<S.Info>
				<S.InfoTitle>User Experience Design</S.InfoTitle>
				<S.InfoSubTitle>Trabalhamos para que os usuários tenham as melhores
					experiência possível.
				</S.InfoSubTitle>
			</S.Info>
		</S.InfoContainer>

		</>
	)
}

export default Main;


/*

*/
