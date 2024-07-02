import React, { useState } from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Pagination,
} from '@carbon/react';
import '@carbon/styles/css/styles.css';
import { CheckmarkOutline, Close } from "@carbon/react/icons";

export const DataTableComponent = (props) => {
  const { rows, headers, indicator } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = ({ page, pageSize }) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // Calculate the rows for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentRows = rows.slice(startIndex, endIndex);

  return (
    <div className="data-table-container">
      <DataTable rows={currentRows} headers={headers}>
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
                    <TableCell key={cell.id}>
                      {cell.value > 0 && indicator === true ? (
                        <div className="emr-version">
                          <CheckmarkOutline size={18} />
                        </div>
                      ) : cell.value === 0 && indicator === true ? (
                        <div className="non-functional-emr">
                          <Close size={18} />
                        </div>
                      ) : (
                        cell.value
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
      <Pagination
        totalItems={rows.length}
        pageSize={pageSize}
        pageSizes={[10, 20, 30, 40, 50]}
        onChange={handlePageChange}
        page={currentPage}
      />
    </div>
  );
};
