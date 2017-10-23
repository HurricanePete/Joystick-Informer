import React from 'react';

import './priceCell.css';

export default function PriceCell(props) {
	return(
		<tr className="price-cell">
			<td>{props.merchant}</td>
			<td>{props.price}</td>
		</tr>
		);
}