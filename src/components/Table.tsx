import { Table as FlowbiteTable } from "flowbite-react";

type Row = (string | number)[];

type TableProps = {
  headers: string[];
  rows: Row[];
  isStriped?: boolean;
};

export const Table = ({ headers, rows, isStriped = false }: TableProps) => (
  <FlowbiteTable striped={isStriped}>
    <FlowbiteTable.Head>
      {headers.map((header) => (
        <FlowbiteTable.HeadCell className="flex-1" key={header}>
          {header}
        </FlowbiteTable.HeadCell>
      ))}
    </FlowbiteTable.Head>
    <FlowbiteTable.Body className="divide-y">
      {rows.map((cells, index) => (
        <FlowbiteTable.Row
          key={index}
          className="bg-white dark:border-gray-700 dark:bg-gray-800 flex w-full"
        >
          {cells.map((cell) => (
            <FlowbiteTable.Cell
              key={cell}
              className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex-1"
            >
              {cell}
            </FlowbiteTable.Cell>
          ))}
        </FlowbiteTable.Row>
      ))}
    </FlowbiteTable.Body>
  </FlowbiteTable>
);
