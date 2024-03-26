import { Button, Tooltip } from "flowbite-react";
import { SortOrder } from "@/types";

type SortButtonsProps = {
  sortOrder: SortOrder;
  currentSortField: string;
  sortFields: string[];
  onSort: (field: string) => void;
  onChangeSortOrder: () => void;
};

export const SortButtons = ({
  sortFields,
  sortOrder,
  currentSortField,
  onSort,
  onChangeSortOrder,
}: SortButtonsProps) => (
  <Button.Group>
    {sortFields.map((field) => {
      const sortHandler = () => onSort(field);
      const color = field.toLowerCase() === currentSortField ? "blue" : "light";

      return (
        <Button
          className="capitalize"
          key={field}
          color={color}
          onClick={sortHandler}
        >
          <Tooltip
            placement="bottom"
            className="capitalize whitespace-nowrap	mt-3"
            content={`Sort by: ${field}`}
          >
            {field}
          </Tooltip>
        </Button>
      );
    })}
    <Button onClick={onChangeSortOrder} color="light">
      <Tooltip
        placement="bottom"
        className="capitalize whitespace-nowrap	mt-3"
        content={`Sort order: ${
          sortOrder === "asc" ? "ascending" : "descending"
        }`}
      >
        {sortOrder === "asc" ? "▲" : "▼"}
      </Tooltip>
    </Button>
  </Button.Group>
);
