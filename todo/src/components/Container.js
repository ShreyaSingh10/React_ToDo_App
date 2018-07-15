import React from 'react';
import Todos from './Todos.js'
import Addtodo from './Addtodo.js'
import './style.css'
import axios from 'axios'

class Container extends React.Component{
	state={
		tasks:[
				/*{
				"visible": true,
				"completed": false,
				"date": "2018-07-12T15:13:56.387Z",
				"_id": "5b420430654c786802418210",
				"name": "Pizza",
				"description": "I'll eat Pizza"
				},
				{
				"visible": false,
				"completed": false,
				"date": "2018-07-12T15:13:56.387Z",
				"_id": "5b4204d9bdccaf6806bd897a",
				"name": "Samosa",
				"description": "I'll eat Samosa TOoo"
				},
				{
				"visible": true,
				"completed": false,
				"date": "2018-07-12T15:13:56.387Z",
				"_id": "5b42050940b4106807a0afe5",
				"name": "Pastry",
				"description": "Eat pastry ar 6"
				}*/
			]
	}
	componentDidMount(){
		axios.get('http://api.todo.apathak.com/api/todo')
		.then(response => this.setState({tasks:response.data}))
	}

// {
// 	name:"",
// 	description:""
// }


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
		    description: ''
		  })
		  //.then(function (response) {
		   // console.log('response',response);
		  //})
		}


//All logigs to delete todo will be here
    deleteToDo = (identifier) => {
    	console.log("identifier",identifier);
    	this.setState((prevstate) => {
    		//console.log("coming here")
    		//console.log(prevstate.tasks);
    		let newTasks = prevstate.tasks.filter((t) => {
    			//console.log(t.name)
    			return t._id !== identifier
    		})


    		this.setState({
    			tasks: newTasks
    		})
    	})
    	axios.delete('http://api.todo.apathak.com/api/todo', {
			id:identifier
		}).then(function (response) {
		    console.log('response',response);
		  })
    }
    
	
	render(){
		console.log(this.state);
		return(
			<div className="container">
			    To Do App

			    {this.state.tasks.map((task)=><Todos
			    	key={task._id}
			    	id={task._id}
			    	name={task.name}
			    	deleteToDo={this.deleteToDo} 
			    	completeToDo={this.completeToDo} />)
			    }
				<Addtodo addToDo={this.addToDo}/>
			</div>
		);
	}
}
export default Container;