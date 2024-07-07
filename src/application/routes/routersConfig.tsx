import { About } from 'presentation/pages/About/About';
import { Collaboration } from 'presentation/pages/Collaboration/Collaboration';
import { Compositions } from 'presentation/pages/Compositions/Compositions';
import { CompositionPage } from 'presentation/pages/Composition/Composition';
import { Texts } from 'presentation/pages/Texts/Texts';
import { useRoutes } from 'react-router-dom';
import { Materials } from 'presentation/pages/Materials/Materials';
import { MaterialComponent } from 'presentation/components/Material-component/Material-component';
import { Text } from 'presentation/pages/Text/Text';
import { Performances } from 'presentation/pages/Performances/Performances';
import { Performance } from 'presentation/pages/Performance/Performance';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: '/',
			element: null,
		},
		{
			path: '/about',
			element: <About />,
		},
		{
			path: '/collaboration',
			element: <Collaboration />,
		},
		{
			path: '/compositions',
			element: <Compositions />,
		},
		{
			path: '/compositions/:id',
			element: <CompositionPage />,
		},
		{
			path: '/compositions/anonymous-materials',
			element: <Materials />,
		},
		{
			path: '/compositions/anonymous-materials/:id',
			element: <MaterialComponent />,
		},
		{
			path: '/texts',
			element: <Texts />,
		},
		{
			path: '/texts/:id',
			element: <Text />,
		},
		{
			path: '/performances',
			element: <Performances />,
		},
		{
			path: '/performances/:id',
			element: <Performance />,
		},
	]);

	return config;
};