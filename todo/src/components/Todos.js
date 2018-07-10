import React from 'react'
import './style.css'

class Todos extends React.Component{
	render(){
		return(
			<div className="todos">
					{this.props.name}
					<button id="cancel" onClick={this.props.deleteToDo} >delete</button>
			</div>
		);
	}
}
export default Todos;