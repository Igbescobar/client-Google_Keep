import { useState } from "react";
import { Todos } from "./components/todos";
import { TodoId, TodoTitle, filterValue } from "./types";
import { TodoCompleted } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

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
	const [filterSelected, setFilterSelected] = useState<filterValue>(TODO_FILTERS.ALL);

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

	const handleFilterChange = (filter: filterValue) => {
		setFilterSelected(filter);
	};

	const filteredTodos = todos.filter(todo => {
		if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
		if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
		return todo;
	});

	const onClearCompleted = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		setTodos(newTodos);
	};

	const handleCreateTodo = ({ title }: TodoTitle) => {
		const newTodo = {
			id: crypto.randomUUID(),
			title: title,
			completed: false
		};
		setTodos([
			...todos,
			newTodo
		]);
	};

	const activeCount = todos.filter(todo => !todo.completed).length;

	const completedCount = todos.length - activeCount;

	return (
		<div className="todoapp">
			<Header onAddTodo={handleCreateTodo}/>
			<Todos
				onToggleCompletedTodo={handleCompleted}
				onRemoveTodo={handleRemove}
				todos={filteredTodos}
			/>
			<Footer
				completedCount={completedCount}
				activeCount={activeCount}
				filterSelected={filterSelected}
				handleFilterChange={handleFilterChange}
				onClearCompleted={onClearCompleted}
			/>
		</div>
	);
}

export default App;
