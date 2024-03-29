import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className="pa2" >
			<input className="pa3 ba b--green bg-lightest-blue tc"
				type='search' 
				placeholder='search by name' 
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;