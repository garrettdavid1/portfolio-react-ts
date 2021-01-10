import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { colors } from '../constants/colors';

declare module '@material-ui/core/styles/createPalette' {
	interface BrandingCommonColors extends CommonColors {
		lightGray: string;
		darkGray: string;
		orange: string;
	}
	interface BrandingColorClassificationOptions {
		[index: string]: SimplePaletteColorOptions | ColorPartial;
	}
	interface BrandingColorClassification {
		[index: string]: PaletteColor;
	}
	interface CustomPalette {
		common: BrandingCommonColors;
	}
	interface CustomPaletteOptions extends PaletteOptions {
		common?: BrandingCommonColors;
	}
	interface PaletteOptions {
		custom?: CustomPaletteOptions;
	}
	interface Palette {
		custom: CustomPalette;
	}
}

export const baseTheme: ThemeOptions = {
	props: { MuiWithWidth: { initialWidth: 'xl' } },
	palette: {
		type: 'light',
		secondary: {
			main: colors.orange,
		},
		text: {
			primary: colors.darkGray,
			secondary: colors.white,
			hint: colors.orange
		},
		custom: {
			common: {
				black: colors.black,
				white: colors.white,
				lightGray: colors.lightGray,
				darkGray: colors.darkGray,
				orange: colors.orange,
			},
		},
	},
	typography: {
		fontFamily: [
			'Rubik',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	}
};

export const theme = createMuiTheme(baseTheme);
