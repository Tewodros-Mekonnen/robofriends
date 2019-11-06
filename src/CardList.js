import React from 'react';
import Card from './Card';

const CardList=({robots})=>{
	return(
		<div>
			{
				robots.map((user,i)=>{
					return(
						<Card 
							key={i}      //every time when we loop, we have to use the variable 'key' to prevent any error with the dome. 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
						/>
					);
				})
			}
		</div>
	);
}
export default CardList;


//{
	/*here in this js file, we are accessing the robots.js data manually. To do better, we can use loop method to access the entire data. see the other
	project that uses loop*/
//}

