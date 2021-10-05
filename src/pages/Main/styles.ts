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
	background-color: #fff;
	display: flex;
	flex-direction: row;
	margin-top: 20%;
	padding: 80px 20px;
	@media (max-width: 900px) {
    flex-direction: column;
  }
	box-shadow: 0 0 1em #eee;
	border-radius: 1rem;
`;

export const Info = styled.div`
	flex: 1;
	height: 250px;
	padding: 0px 20px;
`;

export const InfoTitle = styled.strong`
	font-size: 3rem;
	color: ${props => props.theme.colors.text_1};
`;

export const InfoSubTitle = styled.p`
	color: ${props => props.theme.colors.text_2};
	font-size: 2rem;
	margin-top: 1.5rem;
`;

export const Icon = styled.img`
	height: 80px;
`;

export const ListTitle = styled.h1`
	font-size: 5.2rem;
	margin-top: 200px;
`;

export const ListItem = styled.ul`
	list-style-type: none;
	margin-top: 50px;

	li {
		display: flex;
		font-size: 3.2rem;
		margin: 20px 0px;
		align-items: center;
	}
`;
