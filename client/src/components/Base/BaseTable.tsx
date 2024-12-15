import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { getAtPath } from '../../utils/object.utils';
import { BaseCard } from './BaseCard.tsx';

export interface BaseTableHeader {
  label?: string;
  dataPath: string;
}

interface BaseTableProps<T extends object> {
  headers: BaseTableHeader[],
  dataItems: T[]
}

export function BaseTable<T extends { id: string }>(props: BaseTableProps<T>){
  const { headers, dataItems } = props;
  return <BaseCard>
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header: BaseTableHeader) => <TableCell key={header.dataPath}><Typography>{header.label}</Typography></TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {dataItems.map((dataItem: T) => <TableRow
          key={dataItem.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          {headers.map((header: BaseTableHeader) => <TableCell key={`${dataItem.id}_${header.dataPath}`}>{getAtPath(dataItem, header.dataPath)}</TableCell>)}
        </TableRow>)}
      </TableBody>
    </Table>
  </BaseCard>
}
