import { Dispatch, SetStateAction } from 'react';

export interface InputValidationMap {
	value: any;
	setErrorFunc: Dispatch<SetStateAction<boolean>>;
}

export const containsInputErrors = (maps: InputValidationMap[]): boolean => {
	let containsErrors = false;

	maps.forEach((map: InputValidationMap) => {
		if (!map.value) {
			containsErrors = true;
			map.setErrorFunc(true);
		}
	});

	return containsErrors;
};

export const createValidationMap = (
	value: any,
	setErrorFunc: Dispatch<SetStateAction<boolean>>
): InputValidationMap => ({ value, setErrorFunc });
