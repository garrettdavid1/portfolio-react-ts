import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './App.style';
import { Header } from '../sections/Header/Header';
import { Jumbotron } from '../sections/Jumbotron/Jumbotron';
import { DiagonalDivider } from '../sections/dividers/DiagonalDivider/DiagonalDivider';
import { LineDivider } from '../sections/dividers/LineDivider/LineDivider';
import { About } from '../sections/About/About';
import { Projects } from '../sections/Projects/Projects';
import { Services } from '../sections/Services/Services';
import { Connect } from '../sections/Connect/Connect';

function App() {
	const { appContainer, contentContainer } = useStyles();
	return (
		<Box className={appContainer}>
			<Header />
			<Box className={contentContainer} id='app-content-container'>
				<Jumbotron />
				<DiagonalDivider />
				<About />
				<LineDivider />
				<Projects />
				<LineDivider flipped={true} />
				<Services />
				<DiagonalDivider flipped={true} />
				<Connect />
			</Box>
		</Box>
	);
}

export default App;
