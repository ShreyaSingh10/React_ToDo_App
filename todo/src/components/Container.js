import React from 'react';
import Todos from './Todos.js'
import Addtodo from './Addtodo.js'

class Container extends React.Component{
	render(){
		return(
			<div className="container">
				<Todos/>
				<Addtodo/>
			</div>
		);
	}
}
export default Container;