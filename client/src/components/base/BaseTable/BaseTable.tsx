import { Table } from '@mantine/core';
import { createKey, getAtPath } from '@/utils/object.utils';

const HEADER = 'header';
const ROW = 'row';
const CELL = 'cell';

export interface TableHeader {
  label: string;
  dataPath: string;
}

export type BaseTableProps = {
  headers: TableHeader[];
  dataItems: any[];
};

export default function BaseTable({ headers, dataItems }: BaseTableProps) {
  return (
    <Table>
      <TableHeader headers={headers} />
      <TableBody headers={headers} dataItems={dataItems} />
    </Table>
  );
}

type TableHeaderProps = Pick<BaseTableProps, 'headers'>;
function TableHeader({ headers }: TableHeaderProps) {
  return (
    <Table.Thead>
      <Table.Tr>
        {headers.map((header: TableHeader) => (
          <Table.Td
            key={createKey(header.dataPath, HEADER)}
            id={createKey(header.dataPath, HEADER)}
          >
            {header.label}
          </Table.Td>
        ))}
      </Table.Tr>
    </Table.Thead>
  );
}

function TableBody({ headers, dataItems }: BaseTableProps) {
  return (
    <Table.Tbody>
      {dataItems.map((dataItem) => (
        <Table.Tr key={createKey(dataItem.id, ROW)} id={createKey(dataItem.id, ROW)}>
          {headers.map((header: TableHeader, idx: number) => (
            <Table.Td
              key={createKey(header.dataPath, idx, CELL)}
              id={createKey(header.dataPath, idx, CELL)}
            >
              {getAtPath(dataItem, header.dataPath)}
            </Table.Td>
          ))}
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
}
