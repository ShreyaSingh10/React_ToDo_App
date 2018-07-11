import React from 'react';
import Todos from './Todos.js'
import Addtodo from './Addtodo.js'
import './style.css'

class Container extends React.Component{
	state={
		tasks:[
			{ name: "I am task 1"},
			{ name: "I am task 2"},
		]
	}

	addToDo = (todo) => {
		console.log("Adding TODO");
		this.setState((prevstate) => {
			let a= prevstate.tasks;
			a.push(todo);
			this.setState({
				tasks:a,
			});
			console.log(this.state.tasks);
		})

	}
//All logigs to delete todo will be here
    deleteToDo = (identifier) => {
    	console.log(identifier)
    	this.setState((prevstate) => {
    		console.log("coming here")
    		console.log(prevstate.tasks);
    		let newTasks = prevstate.tasks.filter((t) => {
    			console.log(t.name)
    			return t.name !== identifier
    		})
    		this.setState({
    			tasks: newTasks
    		})
    		console.log(newTasks);
    	})
    }
	
	render(){
		return(
			<div className="container">
			    To Do App

			    {this.state.tasks.map((task)=><Todos name={task.name} deleteToDo={this.deleteToDo}/>)}
				<Addtodo addToDo={this.addToDo}/>
			</div>
		);
	}
}
export default Container;