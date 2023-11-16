import { useState } from "react";
import { Todos } from "./components/todos";

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
	const [todos] = useState(mockTodos);
	return (
		<div>
			<h1>Todo</h1>
			<Todos todos={todos} />
		</div>
	);
}

export default App;
