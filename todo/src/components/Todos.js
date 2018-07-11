import React from 'react'
import './style.css'

class Todos extends React.Component{

	//This will handle the deleteTodo function that we are receiving via props
	//Basicaly it will call it ,  
	handleDelete = e => {
		//e.preventDefault();
		//const name = this.tasks.filter()
		console.log("Hey I'll call the deleteTodo");
		console.log(e.target.name)
		this.props.deleteToDo(e.target.name); // 

	}

	render(){
		return(
			<div className="todos">
					{this.props.name}
					<button id="cancel" name={this.props.name} onClick={this.handleDelete} >delete</button>
			</div>
		);
	}
}
export default Todos;