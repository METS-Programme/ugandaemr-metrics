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
import {CheckmarkOutline, Close} from "@carbon/react/icons";

export const DataTableComponent = (props) => {
  const { rows, headers } = props;
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
                    <TableCell key={cell.id}>{ cell.value > 0 ? (
                      <div className="emr-version">
                        <CheckmarkOutline size={18}/>
                      </div>

                    ): cell.value === 0 ?  (
                      <div className="non-functional-emr">
                        <Close size={18}/>
                      </div>
                    ): cell.value
                    }</TableCell>
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

