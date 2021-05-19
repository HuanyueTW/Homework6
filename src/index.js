import React from 'react'; 
import ReactDOM from 'react-dom'; 
import TextField from '@material-ui/core/TextField';
/**
class MyForm extends React.Component { 
 constructor(props) { 
 super(props); 
 this.state = { username: '' }; 
 } 
 myChangeHandler = (event) => {
 this.setState({username: event.target.value}); 
 } 
 render() { 
 return ( 
 <form> 
 <h1>Hello {this.state.username}</h1> 
 <h1><font color = "lightblue">CGU Todo List</font></h1> 
 <TextField id="outlined-basic" label="Outlined" variant="outlined" />
 <input type='text' onChange={this.myChangeHandler} /> 
 </form> 
 ); 
 } 
} 
ReactDOM.render(<MyForm />, document.getElementById('root'));
 */

/**
var todoItems = []; 
class TodoApp extends React.Component { 
 constructor (props) { 
 super(props); 

 } 
 addItem(todoItem) { 

 } 
 removeItem (itemIndex) { 

 } 
 TodoDone(itemIndex) { 

 } 
 render() { 
 return ( 
 <div id="main"> 
 <ToDoTitle /> 
 <ToDoAddForm /> 
 <TodoList /> 
 </div> 
 ); 
 } 
} 



class ToDoTitle extends React.Component { 
  render () { 
  return <h1>CGU Todo list</h1>; 
  } 
 }

 class ToDoAddForm extends React.Component { 
  constructor(props) { 
  super(props); 
  this.state = {value: ''}; 
  this.handleChange = this.handleChange.bind(this); 
  this.handleSubmit = this.handleSubmit.bind(this); 
  } 
  handleChange(event) { 
  this.setState({value: event.target.value}); 
  } 
  handleSubmit(event) { 
  this.setState({value: event.target.value}); 
  event.preventDefault(); 
  } 
  render() { 
  return ( 
  <form onSubmit={this.handleSubmit}> 
  <input type="text" value={this.state.value} onChange={this.handleChange} /> 
  <input type="submit" value="Submit" /> 
  </form> 
  ); 
  } 
 }

 class TodoList extends React.Component { 
  render () { 
    return <h1>CGU Todo list</h1>; 
  } 
 }

 ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('root'));
 */

 import App from './App'
 
 let data = [
  {id: 0, text: '測試A!!!', complete: true, deleteFlag: false},
  {id: 1, text: '測試B!!!', complete: false, deleteFlag: false},
  {id: 2, text: '測試C!!!', complete: true, deleteFlag: false},
 ]
 
 ReactDOM.render(
   <App data={data}/>,
   document.getElementById('root')
 )



/**
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/
