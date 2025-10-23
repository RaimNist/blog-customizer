import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Spacing } from 'src/ui/spacing';
import { Select } from 'src/ui/select/Select';
import {
	defaultArticleState,
	type ArticleStateType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

import { useEffect, useRef, useState } from 'react';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	appliedState: ArticleStateType;
	setAppliedState: (state: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	appliedState,
	setAppliedState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedState, setSelectedState] =
		useState<ArticleStateType>(defaultArticleState);

	const rootRef = useRef<HTMLElement | null>(null);

	useOutsideClickClose({
		isOpen: isOpen,
		rootRef: rootRef,
		onChange: setIsOpen,
	});

	useEffect(() => {
		setSelectedState(appliedState);
	}, [appliedState]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setAppliedState(selectedState);
		setIsOpen(false);
	};

	const handleReset = (e: React.FormEvent) => {
		e.preventDefault();
		setSelectedState(defaultArticleState);
		setAppliedState(defaultArticleState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
				ref={rootRef}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text as='h2' size={42} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Spacing space='m' />
					<Select
						selected={selectedState.fontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={(value) =>
							setSelectedState((prev) => ({ ...prev, fontFamilyOption: value }))
						}
					/>
					<Spacing space='m' />
					<RadioGroup
						name='article-language'
						options={fontSizeOptions}
						selected={selectedState.fontSizeOption}
						onChange={(value) =>
							setSelectedState((prev) => ({ ...prev, fontSizeOption: value }))
						}
						title='размер шрифта'
					/>
					<Spacing space='m' />
					<Select
						selected={selectedState.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={(value) =>
							setSelectedState((prev) => ({ ...prev, fontColor: value }))
						}
					/>
					<Spacing space='m' />
					<Separator />
					<Spacing space='m' />
					<Select
						selected={selectedState.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={(value) =>
							setSelectedState((prev) => ({ ...prev, backgroundColor: value }))
						}
					/>
					<Spacing space='m' />
					<Select
						selected={selectedState.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={(value) =>
							setSelectedState((prev) => ({ ...prev, contentWidth: value }))
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
