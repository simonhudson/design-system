import { MouseEvent, ReactNode } from 'react';
import { StyledButtonRow, StyledButton } from './index.styles';

export type ButtonProps = {
	href?: string;
	isDestructive?: boolean;
	isWide?: boolean;
	label: string;
	onClick?: (e: MouseEvent) => void;
	opensNewTab?: boolean;
	size?: 'small' | 'medium' | 'large' | 'x-large';
	variant?: 'primary' | 'secondary' | 'tertiary';
};

export const Button = ({
	href,
	isDestructive = false,
	isWide = false,
	label,
	onClick,
	opensNewTab = false,
	size = 'medium',
	variant = 'primary',
}: ButtonProps) => {
	return (
		<StyledButton
			as={href ? 'a' : null}
			href={href || null}
			data-is-destructive={isDestructive}
			data-is-wide={isWide}
			onClick={(e: MouseEvent) => {
				if (onClick) onClick(e);
			}}
			data-size={size}
			target={href && opensNewTab ? '_blank' : null}
			data-variant={variant}
		>
			{label}
		</StyledButton>
	);
};

export const ButtonRow = ({ children }: { children: ReactNode }) => <StyledButtonRow>{children}</StyledButtonRow>;
