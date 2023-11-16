import { FILTERS_BUTTON } from "../consts";
import { filterValue } from "../types";

interface Props {
  filterSelected: filterValue
  onFilterChange: (filter: filterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
	return(
		<ul className="filters">
			{
				Object.entries(FILTERS_BUTTON).map(([key, { href, literal }]) => {
					const isSelected = key === filterSelected;
					const className = isSelected ? "selected" : "";

					return (
						<li key={key}>
							<a 
								className={className}
								href={href}
								onClick={(event) => {
									event.preventDefault();
									onFilterChange(key as filterValue);
								}}
							>
								{literal}
							</a>
						</li>
					);
				})
			}
		</ul>
	);
};