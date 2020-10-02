import React from 'react';
const SearchBox =({searchfield,searchChanges})=>{
	return(
		<div className='pa2'>
			<input className='pa3 ba b--green bg-light-blue'
			type='Search' 
			placeholder='Search Robots'
			onChange={searchChanges}/>
		</div>
	); 
}
export default SearchBox;