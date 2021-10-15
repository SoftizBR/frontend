import { lighten } from 'polished';
import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.img`
	@media (max-width: 900px) {
    height: 60px;
  }
	:hover {
		cursor: pointer;
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
				text-decoration: underline;
				text-decoration-color: ${props => props.theme.colors.primary};
				transition: 500ms;
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

export const GridContainer = styled.div`
	display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr) );
	margin-top: 50px;
`;
