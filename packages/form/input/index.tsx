import React, { createRef, useState } from 'react';
import { Label, InputField, Description, ErrorText } from '../form.styles';
import type { FormFieldProps } from '../types';

export interface InputProps extends FormFieldProps {
	description?: string;
	placeholder?: string;
	type?:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
}

export const Input = ({
	errorText,
	description,
	id,
	label,
	onChange,
	placeholder = '',
	type = 'text',
	required,
	value,
}: InputProps) => {
	const fieldRef = createRef<HTMLInputElement>();

	const [isInvalid, setIsInvalid] = useState<boolean>(false);

	const fieldId = `input-${id}`;

	let describedByElement = isInvalid ? `error--${fieldId}` : '';
	if (description) describedByElement = describedByElement + ` description--${fieldId}`;

	const validateOnBlur = () => {
		if (required) {
			const value = fieldRef?.current?.value;
			if (!value) setIsInvalid(true);
		}
	};

	return (
		<>
			<Label htmlFor={fieldId}>{label}</Label>
			{description && <Description id={`description--${fieldId}`}>{description}</Description>}
			<InputField
				aria-describedby={describedByElement}
				aria-invalid={isInvalid}
				aria-required={required}
				id={fieldId}
				name={fieldId}
				onBlur={() => validateOnBlur()}
				onChange={(e) => {
					if (onChange) onChange(e);
				}}
				onFocus={() => setIsInvalid(false)}
				placeholder={placeholder}
				ref={fieldRef}
				type={type}
			/>
			{isInvalid && <ErrorText id={`error--${fieldId}`}>{errorText}</ErrorText>}
		</>
	);
};
