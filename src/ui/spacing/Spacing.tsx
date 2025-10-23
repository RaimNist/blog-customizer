import { clsx } from 'clsx';

import styles from './Spacing.module.scss';

type SpacingProps = {
	space: 'xs' | 's' | 'm' | 'l' | 'xl';
};

export const Spacing = ({ space = 'm' }: SpacingProps) => {
	const className = clsx(styles.spacing, styles[`${space}`]);
	return <div className={className} />;
};
