import React from 'react';
import Todos from './Todos.js'
import Addtodo from './Addtodo.js'
import './style.css'

class Container extends React.Component{
	state={
		tasks:[
			{ name: "I am task 1"},
			{ name: "I am task 2"},
			{ name: "I am task 3"},
		]
	}

	addToDo = () => {
		console.log("Adding TODO");

	}
	
	render(){
		return(
			<div className="container">
			    To Do App

			    {this.state.tasks.map((task)=><Todos name={task.name}/>)}
				<Addtodo addToDo={this.addToDo}/>
			</div>
		);
	}
}
export default Container;