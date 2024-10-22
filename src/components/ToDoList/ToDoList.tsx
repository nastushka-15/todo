import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { text } from "stream/consumers"
import { ToDo } from "../../models/todo-item"

export const ToDoList =(props: {todos: ToDo[], updateToDo: Function, deliteToDo: Function})=> {
    
const checkedList = () => {
    return props.todos
    .filter((item) => !item.isDone)
    .map((item, idx) => {
        return (
            <ToDoListItem 
            toDoItem={item} 
            key ={idx} 
            updateToDo = {props.updateToDo} 
            deliteToDo = {props.deliteToDo}
            />
        )
    })
}

const uncheckedList = () => {
    return props.todos
    .filter((item) => item.isDone)
    .map((item, idx) => {
        return (
            <ToDoListItem 
            toDoItem={item} 
            key ={idx} 
            updateToDo = {props.updateToDo} 
            deliteToDo = {props.deliteToDo}
            />
        )
    })
}
    return (
        <div className="todo-container">
        <ul className="todo-list failed">
            { checkedList() }
        
        </ul>
        <ul className="todo-list completed">
        { uncheckedList() }
        </ul>
    </div>
    )
}