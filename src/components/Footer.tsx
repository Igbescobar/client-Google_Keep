import { type filterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: filterValue
  handleFilterChange: (filter: filterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
	activeCount = 0,
	completedCount = 0,
	onClearCompleted,
	filterSelected,
	handleFilterChange

}) => {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{activeCount}</strong> pending tasks
			</span>
			<Filters
				filterSelected = {filterSelected}
				onFilterChange={handleFilterChange}
			/>
			{
				completedCount > 0 && (
					<button
						className="clear-completed"
						onClick={onClearCompleted}
					>
            Delete completed
					</button>
				)
			}
		</footer>
	);
};