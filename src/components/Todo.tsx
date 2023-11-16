import { TodoCompleted, TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: ( { id }: TodoId ) => void
  onToggleCompletedTodo: ({ id, completed }: TodoCompleted) => void
}

export const Todo: React.FC<Props> = ( { id, title, completed, onRemoveTodo, onToggleCompletedTodo } ) => (
	<div className="view">
		<input
			className="toggle"
			checked={completed}
			type="checkbox"
			onChange={(event) => {
				onToggleCompletedTodo({ id, completed: event.target.checked });
			}}
		/>
		<label>{title}</label>
		<button
			className="destroy"
			onClick={() => {
				onRemoveTodo( { id } );
			}}
		/>
	</div>

);
