import React from 'react';
import './style.css'

class Addtodo extends React.Component{
	render(){
		return(
			<div className="addtodo">
				<input type="text" placeholder="Add your task"></input>
				<button type="submit">Add Task</button>
			</div>
		);
	}
}
export default Addtodo;