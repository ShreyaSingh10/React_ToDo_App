import React from 'react';
import Todos from './Todos.js'
import Addtodo from './Addtodo.js'
import './style.css'
import axios from 'axios'

class Container extends React.Component{
	state={
		tasks:[

			]
	}


	componentDidMount(){
		axios.get('http://api.todo.apathak.com/api/todo')
		.then(response => this.setState({tasks:response.data}))
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
		axios.post('http://api.todo.apathak.com/api/todo', {
		    name: todo.name,
		    description: '',
		  }).then(()=>{
		  	axios.get('http://api.todo.apathak.com/api/todo').then((response)=>{
			this.setState(() => ({
							tasks:response.data,
							
						}),()=>{
				console.log("response",response.data,this.state);
			})
			
			})
		  })
		}

    deleteToDo = (identifier) => {
    	console.log("identifier",identifier);
    	this.setState((prevstate) => {

    		let newTasks = prevstate.tasks.filter((t) => {
    			return t._id !== identifier
    		})

    		this.setState({
    			tasks: newTasks,
    		})
    	})

    	axios.delete('http://api.todo.apathak.com/api/todo', {data:{id:identifier}}).then(function (response) {
		    console.log('response',response);
		  })

    }
    
    editToDo = (value, place) => {
    	const tempState = this.state;
    	const tempTask = this.state.tasks[place];
    	tempTask.name =value;

    	tempState.tasks[place] = tempTask;
    	this.setState(tempState);

    }
	
	render(){
		console.log(this.state)
		return(
			<div className="parent_container">
				<div className="container">
				    <h1>To Do App</h1>
				    <Addtodo addToDo={this.addToDo}/>

				    {this.state.tasks.map((task,place)=> task.visible && <Todos
				    	key={task._id}
				    	id={task._id}
				    	name={task.name}
				    	deleteToDo={this.deleteToDo} 
				    	editToDo={this.editToDo}
				    	place={place}
				    	/>)
				    }
				</div>l
			</div>
			
		);
	}
}
export default Container;