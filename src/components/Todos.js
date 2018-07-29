import React from 'react'
import './style.css'

class Todos extends React.Component{
	state={
		name:"",
	}  
	
    handleDelete = e => {
    	this.props.deleteToDo(e.target.id);
    }

    handleChange = e => {
    	console.log(e.target.value);
    	const {value} = e.target;
    	this.setState(()=>({
    		name:value,
    	}))
    }

    submitChange = ()=>{
    	this.props.editToDo(this.state.name, this.props.place);	
    }
    
    componentDidMount(){
		this.setState({
			name: this.props.name,
		})
	} 

	render(){
		return(
			<div className="todos" >
					<input type="text" value={this.state.name} onChange={this.handleChange} onBlur={this.submitChange}></input>
					<button className="cancel" id={this.props.id} onClick={this.handleDelete} >delete</button>
			</div>
		);
	}
}
export default Todos;