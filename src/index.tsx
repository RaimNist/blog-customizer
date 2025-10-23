import { createRoot } from 'react-dom/client';
import { StrictMode, useEffect, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	type ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [appliedState, setAppliedState] =
		useState<ArticleStateType>(defaultArticleState);

	useEffect(() => {
		const rootElement = document.documentElement;

		rootElement.className = clsx(styles.main);

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
	}, [appliedState]);
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

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
