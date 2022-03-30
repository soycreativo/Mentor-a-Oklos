import React from 'react';
import Styles from './SearchContainer.module.css';
import { BiSearchAlt } from 'react-icons/';

const SearchContainer = (props) => {
	return (
		<div className={Styles.Container}>
			<div className={Styles.box}>
			  <h2>{props.h1}</h2>
			</div>

			<div className={Styles.searchButton}>
				<input
					type="search"
					placeholder={props.placeholder}
					onChange={props.onChange}
					value={props.value}
				/>

				<button className={Styles.button} onClick={props.onClick}>
					{props.button}
				</button>
				
			</div>
		</div>
	);
};

export default SearchContainer;
