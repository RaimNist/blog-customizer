import { useState } from 'react';

import { Article } from '../components/article/Article';
import { ArticleParamsForm } from '../components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	type ArticleStateType,
} from '../constants/articleProps';
import styles from '../styles/index.module.scss';

export const App = () => {
	const [appliedState, setAppliedState] =
		useState<ArticleStateType>(defaultArticleState);

	const rootElement = document.documentElement;

	rootElement.className = styles.main;

	rootElement.style.setProperty(
		'--font-family',
		appliedState.fontFamilyOption.value
	);
	rootElement.style.setProperty(
		'--font-size',
		appliedState.fontSizeOption.value
	);
	rootElement.style.setProperty('--font-color', appliedState.fontColor.value);
	rootElement.style.setProperty(
		'--bg-color',
		appliedState.backgroundColor.value
	);
	rootElement.style.setProperty(
		'--container-width',
		appliedState.contentWidth.value
	);

	return (
		<main>
			<ArticleParamsForm
				appliedState={appliedState}
				setAppliedState={setAppliedState}
			/>
			<Article />
		</main>
	);
};
