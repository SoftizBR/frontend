import styled from 'styled-components';

export const InfoWrapper = styled.div`
	max-width: 750px;
	margin-top: 10%;
	hr {
		border : 1px solid #eee;
		margin: 30px 0;
		width: 70%;
	}

	@media (max-width: 900px) {
    max-width: 500px;
  }
`;

export const Title = styled.h1`
	font-size: 5.2rem;
	font-weight: 300;
	color: ${props => props.theme.colors.text_1};
`;

export const SubTitle = styled.h2`
	color: #8C8C8C;
	font-weight: 300;

	max-height: 800px;
	font-size: 3rem;
	color: ${props => props.theme.colors.text_2};
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.img`
	@media (max-width: 900px) {
    height: 60px;
  }
`;

export const ListButton = styled.ul`
	display: flex;
	align-items: center;
	li {

		font-weight: 600;
		list-style-type: none;
		a {
			color: ${props => props.theme.colors.text_1};
			text-decoration: none;
			margin: 0 25px;
			font-size: 2.4rem;
		}
	}

	@media (max-width: 1300px) {
    display: none;
  }
`;

export const Button = styled.button`
	background-color: #9D4EDD;
	height: 70px;
	width: 220px;
	color: #fff;
	font-size: 2.4rem;
	border: none;
	border-radius: 10px;
	margin-left: 50px;

`;

export const InfoContainer = styled.div`
	background-color: #f0f;
	display: flex;
	flex-direction: row;
	height: 250px;
	margin-top: 20%;
`;

export const Info = styled.div`
	flex: 1;
`;

export const InfoTitle = styled.strong`
	font-size: 3rem;
`;

export const InfoSubTitle = styled.p``;
