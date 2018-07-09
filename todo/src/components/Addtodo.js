import React from 'react';
import './style.css'

class Addtodo extends React.Component{
	state={
		name:''
	}
	handleChange = e =>{
			console.log(e.target.value)

			const  name  = e.target.value;
			
			this.setState(()=>{
				return{
					name
				}
			})

			console.log(this.state);

	}

	handleSubmit = e =>{
		e.preventDefault();
		const todo ={
			name: this.state.name
		}
		this.props.addToDo(todo);

	}
	render(){
		return(
			<div className="addtodo">
			<form onSubmit={this.handleSubmit}>
				<input onChange ={this.handleChange} type="text" placeholder="Add your task"></input>
				<button type="submit" type="submit">Add Task</button>
			</form>
			</div>
		);
	}
}
export default Addtodo;