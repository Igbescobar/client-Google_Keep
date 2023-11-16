import { TodoId, type ListOfTodos, TodoCompleted } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ( id: TodoId ) => void
  onToggleCompletedTodo: ({ id, completed }: TodoCompleted)=> void
}

export const Todos: React.FC<Props> = ( { todos, onRemoveTodo, onToggleCompletedTodo } ) => (
	<ul className="todo-list">
		{todos.map( todo => (
			<li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
				<Todo
					key={todo.id}
					id={todo.id}
					title={todo.title}
					completed={todo.completed}
					onRemoveTodo={onRemoveTodo}
					onToggleCompletedTodo={onToggleCompletedTodo}
				/>
			</li>
		) )}
	</ul>
);
