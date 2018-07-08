import React from 'react'
import './style.css'

class Todos extends React.Component{
	render(){
		return(
			<div className="todos">
					{this.props.name}
			</div>
		);
	}
}
export default Todos;