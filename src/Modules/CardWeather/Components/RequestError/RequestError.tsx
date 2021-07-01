import React, { useCallback, useState } from 'react';
import { Button, Frame, Page, Toast } from '@shopify/polaris';
import {  useSelector } from 'react-redux';
import { TextStyle } from '@shopify/polaris';

import { StateType } from '../../../../Shared/types/types';

import c from './styles.module.css';

export const RequestError = () => {
	const city = useSelector((state: StateType) => state.app?.city);
	const err = useSelector((state: StateType) => state.app?.error);

	const [active, setActive] = useState(false);
	
	const toggleActive = useCallback(() => setActive((active) => !active), []);
	
	const toastMarkup = active ? (
		<Toast content="Server error" error onDismiss={toggleActive} />
	) : null;

	return (
		city?.message ? 
			<p className={c.message}>
                {city.message} <TextStyle variation="code"> {city.cod} </TextStyle>.
            </p> :
		err ? 
			<div className={c.serverErr}>
				<Frame>
					<Page title="Что-то пошло не так...">
						<Button onClick={toggleActive}>
							Подробнее...
						</Button>

						{toastMarkup}

					</Page>
				</Frame>
			</div>
		: null
	);
};