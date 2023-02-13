import { Box, Button, MenuItem, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { TitledSection } from '../../shared/sections/TitledSection/TitledSection';
import { useStyles } from './Connect.style';
import { TextFieldOutlined } from '../../shared/inputs/TextFieldOutlined/TextfieldOutlined';
import { SelectOutlined } from '../../shared/inputs/SelectOutlined/SelectOutlined';
import { Service, services } from '../Services/Services.data';
import {
	containsInputErrors,
	createValidationMap,
} from '../../../util/FormValidation';
import clsx from 'clsx';
import LinkedIn from '../../../assets/img/connectLogos/LinkedIn.png';
import Github from '../../../assets/img/connectLogos/Github.png';
import Twitch from '../../../assets/img/connectLogos/Twitch.png';
import Twitter from '../../../assets/img/connectLogos/Twitter.png';
import { ConnectLink } from './ConnectLink/ConnectLink';
import { Repo } from '../../../network/Repo';
import { LoadingAnimation } from '../../shared/LoadingAnimation/LoadingAnimation';

const messageCharMax = 1000;
const dataSentMessage = "Thanks for reaching out! I'll be in touch shortly.";

export const Connect: FC = () => {
	const {
		connectContentContainer,
		formContainer,
		topFormRow,
		nameInput,
		serviceSelectionInput,
		orangeText,
		submitBtn,
		dataSentMessageText,
		dataSentMessageTextFadeIn,
		linkContainer,
		copyrightContainer
	} = useStyles();
	const [name, setName] = useState<string>('');
	const [hasNameError, setHasNameError] = useState<boolean>(false);
	const [email, setEmail] = useState<string>('');
	const [hasEmailError, setHasEmailError] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');
	const [hasMessageError, setHasMessageError] = useState<boolean>(false);
	const [sendingData, setSendingData] = useState<boolean>(false);
	const [dataSent, setDataSent] = useState<boolean>(false);

	const serviceNames = services.map((serv: Service) => serv.name);
	serviceNames.push('Something Else');

	const [serviceSelection, setServiceSelection] = useState<
		typeof serviceNames[number]
	>('');
	const [
		hasServiceSelectionError,
		setHasServiceSelectionError,
	] = useState<boolean>(false);

	const setField = (
		charMax: number,
		input: string,
		setFieldFn: (input: string) => void,
		setHasErrorFn: (hasError: boolean) => void
	) => {
		if (input.length <= charMax) {
			setFieldFn(input);
			setHasErrorFn(false);
		}
	};

	const submit = async (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault();

		const validationMaps = [
			createValidationMap(name, setHasNameError),
			createValidationMap(serviceSelection, setHasServiceSelectionError),
			createValidationMap(email, setHasEmailError),
			createValidationMap(message, setHasMessageError),
		];

		if (containsInputErrors(validationMaps)) return;

		setSendingData(true);
		const emailSent = await Repo.connect(name, email, serviceSelection, message);

		if(emailSent) setDataSent(true);
	};

	return (
		<TitledSection title='connect' mode='dark'>
			<Box className={connectContentContainer}>
				<Box
					component='form'
					className={formContainer}
					onSubmit={submit}
				>
					<Box className={topFormRow}>
						<TextFieldOutlined
							placeholder='Name'
							value={name}
							error={hasNameError}
							onInput={(e: any) =>
								setField(
									50,
									e.target.value,
									setName,
									setHasNameError
								)
							}
							className={nameInput}
						/>
						<SelectOutlined
							id='service-selection'
							value={serviceSelection}
							error={hasServiceSelectionError}
							margin='none'
							onChange={(
								e: React.ChangeEvent<{ value: unknown }>
							) =>
								setField(
									50,
									e.target.value as string,
									setServiceSelection,
									setHasServiceSelectionError
								)
							}
							label={`Service`}
							inputId='service-selection-input'
							className={serviceSelectionInput}
						>
							{serviceNames.map((servName: string, i: number) => (
								<MenuItem key={`service-${i}`} value={servName}>
									{servName}
								</MenuItem>
							))}
						</SelectOutlined>
					</Box>
					<TextFieldOutlined
						placeholder='Email'
						type='email'
						fullWidth
						value={email}
						error={hasEmailError}
						onInput={(e: any) =>
							setField(
								100,
								e.target.value,
								setEmail,
								setHasEmailError
							)
						}
					/>
					<TextFieldOutlined
						multiline
						rows={10}
						rowsMax={10}
						placeholder={`Message (${messageCharMax} characters max)`}
						fullWidth
						value={message}
						error={hasMessageError}
						onInput={(e: any) =>
							setField(
								messageCharMax,
								e.target.value,
								setMessage,
								setHasMessageError
							)
						}
					/>
					<Typography className={orangeText} variant='caption'>{`${
						messageCharMax - message.length
					} characters remaining`}</Typography>
					<Button
						style={{ opacity: dataSent ? 0 : 1 }}
						disabled={sendingData}
						className={submitBtn}
						type='submit'
					>
						{!sendingData && 'submit'}
						{sendingData && <LoadingAnimation />}
					</Button>
					<Typography
						className={clsx(dataSentMessageText, {
							[dataSentMessageTextFadeIn]: dataSent,
						})}
						variant='h6'
					>
						{dataSentMessage}
					</Typography>
				</Box>
				<Box className={linkContainer}>
					<ConnectLink
						link='https://www.linkedin.com/in/david-garrett-dev'
						image={LinkedIn}
						text='linkedin'
					/>
					<ConnectLink
						link='https://github.com/garrettdavid1'
						image={Github}
						text='github'
						textMarginRight='10px'
					/>
					<ConnectLink
						link='https://twitch.tv/davidthed3v'
						image={Twitch}
						text='twitch'
						textMarginRight='10px'
					/>
					<ConnectLink
						link='https://twitter.com/davidthed3v'
						image={Twitter}
						text='twitter'
						textMarginRight='10px'
					/>
				</Box>
			</Box>
			<Box className={copyrightContainer}>
				<Typography variant='caption' color='textSecondary'>&copy; David Garrett, 2020. All Rights Reserved.</Typography>
			</Box>
		</TitledSection>
	);
};