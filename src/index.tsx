import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { theme } from './styles/theme';

ReactDOM.render(
	<StrictMode>
		<StylesProvider injectFirst>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</StylesProvider>
	</StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
