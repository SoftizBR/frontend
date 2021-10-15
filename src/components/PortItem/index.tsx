import _mood from 'assets/portifolio/mood.png';
import React from 'react';
import * as S from './styles';


const PortItem: React.FC = ({children}) => {
	return <S.Container>
		<S.Wrapper>
			<S.Image src={_mood} />
			<S.InfoWraper>
				<S.Title>Mood</S.Title>
				<S.Description>
					O Mood é uma rede social muito boa e interativa
					onde os usuarios podem curtir posts, criar,
					interagir com outros usuários...
				</S.Description>
			</S.InfoWraper>

		</S.Wrapper>
	</S.Container>
}

export default PortItem;


//
