import React from 'react';



const Card =(props)=>{
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='robots' src={`https://robohash.org/${props.id}23`} length='200px' width='200px' />
			<div>
			<h1>{props.name}</h1>
			<p>{props.email}</p>
			</div>
		</div>
	); 
}
export default Card;