import { Box, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { TitledSection } from '../../shared/sections/TitledSection/TitledSection';
import { useStyles } from './About.style';

export const About: FC = () => {
	const { aboutContentContainer, aboutContent } = useStyles();

	const text = `asdf asdf sadf asd fsdaf asdfa sdfasfasdf sadf sadfsad fsadf sadf sadf sadf sadassdfasdf
	asdfasdfasdfsadfdsafdasfasd asd fsad fasd fasd fsad fds fsda fasd dfas fsda jksdahfkjsdakhsad kjsdhaf
	 asdfjkjasd hfkjsad fhsadiu fhsadiu fsdaoi fusdaoipf usaodi fuasoidp fusadoi fuosdiau fosadip fuoisda uf
	 as doifu opaisdfuoipasdu foisdau fopisadufoipsad ufoisadu foiasdu foipasdu foisadu fiosadufoisadu foisadu 
	 aso idfuoiasdu fopiasd fuoisadf usdaio fuiopsadf us`
	return (
		<TitledSection title='about'>
			<Box className={aboutContentContainer}>
				<Typography className={aboutContent} variant='h6'>{text}</Typography>
			</Box>
		</TitledSection>
	)
}