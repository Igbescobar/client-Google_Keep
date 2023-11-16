import { useState } from "react";
import { Todos } from "./components/todos";
import { TodoId } from "./types";
import { TodoCompleted } from "./types";

const mockTodos = [
	{
		id: "2",
		title: "todo 2",
		completed: false,
	},
	{
		id: "3",
		title: "todo 3",
		completed: true,
	},
];

function App(): JSX.Element {
	const [ todos, setTodos ] = useState( mockTodos );

	const handleRemove = ( { id }: TodoId ) => {
		const newTodos = todos.filter( todo => todo.id !== id );
		setTodos( newTodos );
	};

	const handleCompleted = ({ id, completed }: TodoCompleted) => {
		const newTodos = todos.map(todo => {
			if (todo.id === id){
				return {
					...todo, 
					completed 
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	return (
		<div className="todoapp">
			<h1>Todo</h1>
			<Todos
				onToggleCompletedTodo={handleCompleted}
				onRemoveTodo={handleRemove}
				todos={todos}
        
			/>
		</div>
	);
}

export default App;
