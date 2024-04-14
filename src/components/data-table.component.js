import React from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';
import '@carbon/styles/css/styles.css';
export const DataTableComponent = () => {
  const rows = [
    {
      id: '1',
      facility: 'Hoima REGIONAL REF Hospital',
      served: 203,
      records: 302,
      status: 'Active',
    },
    {
      id: '2',
      facility: 'Kagadi Hospital',
      served: 138,
      records: 201,
      status: 'Active',
    },
    {
      id: '3',
      facility: 'Kyangwali HCIV',
      served: 46,
      records: 59,
      status: 'Active',
    },
    {
      id: '4',
      facility: 'Bandi HC',
      served: 30,
      records: 50,
      status: 'Active',
    },
    {
      id: '5',
      facility: 'Kisenyi HCIV',
      served: 89,
      records:145,
      status: 'Active',
    },
  ];

  const headers = [
    {
      key: 'facility',
      header: 'Facility',
    },
    {
      key: 'served',
      header: 'Patients Served',
    },
    {
      key: 'records',
      header: 'Records Captured',
    },
    {
      key: 'status',
      header: 'Status',
    },
  ];

  return (
    <div className="data-table-container">
      <DataTable rows={rows} headers={headers}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
    </div>
  );
};

