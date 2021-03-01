import React, { useEffect, useState } from 'react';
import { Card, OptionList } from '@shopify/polaris';

export const ListCity = ({favorites, setFavorites}) => {
	const [selected, setSelected] = useState([]);
    const arr = []
    
    useEffect(() => {
        
        for(let key in favorites) {
            arr.push({value: favorites[key], label: favorites[key]})
          }
    }, [favorites])
    // const localUser = JSON.parse(localStorage.getItem('city'));
  
	return (
	  <Card>
		<OptionList
		  title="Избранные города"
		  onChange={setSelected}
          options={arr}
		  selected={selected}
		  onChange={(sel) => console.log(sel)}
		/>
	  </Card>
	);
  }

