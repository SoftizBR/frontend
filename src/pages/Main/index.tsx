/* eslint-disable jsx-a11y/anchor-is-valid */
import landing_art from 'assets/landing_art.png';
import logo from 'assets/logo.png';
import React from 'react';
import * as S from './styles';



const Main: React.FC = () => {
	return (
		<>
		<S.Header>
			<S.Logo src={logo} />
			<S.ListButton>
				<li><a href="#">Quem Somos</a></li>
				<li><a href="#">Portifólio</a></li>
				<li><a href="#">Dúvidas Frequentes</a></li>
			</S.ListButton>
		</S.Header>
		<S.Main>
			<S.Wrapper>
				<S.Title>A melhor <strong>solução</strong> <strong>tecnológica</strong>
				{' '} para o seu <strong>negócio</strong>.</S.Title>
				<S.SubTitle>A Softiz é uma startup focada no desenvolvimento
				de aplicações para pequenas, médias e grandes
				empresas.
				</S.SubTitle>
			</S.Wrapper>
			<S.Wrapper>
				<S.LandingImage src={landing_art} />
			</S.Wrapper>
		</S.Main>

		</>
	)
}

export default Main;
