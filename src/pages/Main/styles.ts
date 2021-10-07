import { lighten } from 'polished';
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

	@keyframes fadein {
			from { opacity: 0 }
			to   { opacity: 1 }
	}

	animation: fadein 1s;
	font-size: 5.2rem;
	font-weight: 300;
	color: ${props => props.theme.colors.text_1};
`;

export const SubTitle = styled.h2`

	@keyframes fadein {
			from { opacity: 0; }
			to   { opacity: 1; }
	}

	animation: fadein 2s;

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
			margin: 0 10px;
			font-size: 2.4rem;

			:hover {
				color: ${props => lighten('0.1', props.theme.colors.text_1)};
			}
		}
	}

	@media (max-width: 1300px) {
    display: none;
  }
`;

export const Button = styled.button`
	background-color: ${props => props.theme.colors.primary};
	height: 60px;
	width: 180px;
	color: #fff;
	font-size: 2.4rem;
	border: none;
	border-radius: 10px;
	margin-left: 50px;
	:hover {
		background-color:  ${props => lighten('0.1', props.theme.colors.primary)};
		transition: 0.2s;
	}
`;

export const InfoContainer = styled.div`
	background-color:  ${props => (props.theme.colors.div_color)};
	display: flex;
	flex-direction: row;
	margin-top: 20%;
	padding: 80px 20px;
	@media (max-width: 900px) {
    flex-direction: column;
  }
	box-shadow: None; //0 0 1em #eee;
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
    color: ${props => props.theme.colors.text_1};
	font-size: 5.2rem;
	margin-top: 200px;
`;

export const ListItem = styled.ul`
	list-style-type: none;
	margin-top: 50px;

	li {
		display: flex;
		font-size: 3.2rem;
		color: ${props => props.theme.colors.text_1}; 
		margin: 20px 0px;
		align-items: center;
	}
`;
