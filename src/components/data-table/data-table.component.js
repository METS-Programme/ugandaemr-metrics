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
  TextInput, Button,
} from '@carbon/react';
import '@carbon/styles/css/styles.css';
import './metrics-data-table.css';
import { saveAs } from "file-saver";
import {CheckmarkOutline, Close, DocumentDownload} from "@carbon/react/icons";

export const DataTableComponent = (props) => {
  const { rows, headers, indicator, showDownload } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePageChange = ({ page, pageSize }) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredRows = rows.filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDownload = () => {
    const currentDate = new Date();
    const filename = `facility_${currentDate.toISOString().replace(/:/g, "-")}`;
    const csvString = convertToCSV(rows, headers);

    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8" });
    saveAs(blob, `${filename}.csv`);
  };

  const convertToCSV = (data, columns) => {
    const header = columns.map((col) => col.header).join(",");
    const rows = data.map((row) =>
      columns.map((col) => JSON.stringify(row[col.key])).join(",")
    );
    return [header, ...rows].join("\n");
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentRows = filteredRows.slice(startIndex, endIndex);

  return (
    <div className="data-table-container">
      <div className="search-input-field">
        <TextInput
          id="facility-search-input"
          labelText="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search"
          hideLabel={true}
        />
        {showDownload ? (
          <Button
            size="md"
            kind="tertiary"
            iconDescription="Download"
            tooltipAlignment="end"
            onClick={handleDownload}
            className="ms-download-btn"
            renderIcon={DocumentDownload}
            hasIconOnly
          />
        ): null}

      </div>

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
                      { typeof cell.value === 'number' && cell.value > 0 && indicator === true ? (
                        <div className="emr-version">
                          <CheckmarkOutline size={18} />
                        </div>
                      ) : typeof cell.value === 'number' && cell.value === 0 && indicator === true ? (
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
        totalItems={filteredRows.length}
        pageSize={pageSize}
        pageSizes={[10, 20, 30, 40, 50]}
        onChange={handlePageChange}
        page={currentPage}
      />
    </div>
  );
};
