import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 10px 10px;
`;

export const Wrapper = styled.div`
	width: 300px;
	background-color: ${props => props.theme.colors.div_color};
	margin: 0 auto;
	border-radius: 0.5rem;

	:hover {
		cursor: pointer;

		box-shadow: ${props => darken( 0.1 ,props.theme.colors.div_color)} 0px 8px 24px;
		transition: 1s;
	}
	:after {
		transition: 1s;
	}
`;

export const Image = styled.img`
	width: 300px;
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
`;

export const InfoWraper = styled.div`
	padding: 8px;
`;

export const Description = styled.div`
	text-align: left;
	font-size: 1.5rem;
	color: ${props => props.theme.colors.text_2};
`;

export const Title = styled.strong`
	text-align: left;
	font-size: 2.5rem;
	color: ${props => props.theme.colors.text_1};
`;
