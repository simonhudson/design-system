import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { spacingRem } from '@/common/theme/spacing';
import { palette } from '@/common/theme/palette';
import { font } from '@/common/theme/font';

export const Form = styled.form`
	text-align: left;
`;

export const FieldRow = styled.div`
	padding: 0 0 ${spacingRem.md};
`;

export const Label = styled.label`
	display: block;
	font-family: ${font.sansSerif};
	font-weight: bold;
	padding: 0 0 ${spacingRem.xsm};
`;

export const InputField = styled.input`
	border: 1px solid ${palette.primary.grey};
	border-radius: ${spacingRem.xsm};
	margin: 0 0 ${spacingRem.xsm};
	padding: ${spacingRem.sm};

	&[aria-invalid='true'] {
		border: 2px solid ${palette.status.error};
	}
`;

export const Button = styled.button`
	background: ${palette.primary.brand};
	border: 0;
	border-radius: ${spacingRem.xsm};
	color: ${palette.primary.white};
	font-weight: bold;
	padding: ${spacingRem.sm};
`;

export const Fieldset = styled.fieldset``;

export const Legend = styled.legend`
	font-weight: bold;
`;

export const Description = styled.span`
	display: block;
	font-family: ${font.sansSerif};
	font-size: ${rem(14)};
	font-weight: normal;
	padding: 0 0 ${spacingRem.xsm};
`;

export const ErrorText = styled.span`
	color: ${palette.status.error};
	display: block;
	font-family: ${font.sansSerif};
`;
