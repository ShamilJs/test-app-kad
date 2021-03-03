import { Button, Frame, Page, Toast } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';

export const ErrorComponent = () => {
    const [active, setActive] = useState(false);
  
    const toggleActive = useCallback(() => setActive((active) => !active), []);
  
    const toastMarkup = active ? (
		<Toast content="Server error" error onDismiss={toggleActive} />
    ) : null;
  
    return (
		<div style={{height: '250px'}}>
			<Frame>
				<Page title="Что-то пошло не так...">
					<Button onClick={toggleActive}>Подробнее...</Button>
					{toastMarkup}
				</Page>
			</Frame>
		</div>
    );
}