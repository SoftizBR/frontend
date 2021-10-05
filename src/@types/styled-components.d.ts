import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		colors: {
			primary: string,
			background: string,
			background_item: string,
			text_1: string,
			text_2: string
		};
	}
}
