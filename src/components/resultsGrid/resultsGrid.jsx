import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

import './resultsGrid.css';

function ResultsGrid({ resultData, handleRowClick }) {
  const [renderedRows, setRenderedRows] = useState([]);

  const columns = [
    { field: 'id' },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'link', headerName: 'URL', width: 500 },
  ];

  const renderGridRows = () => {
    const rows = resultData.map((entry) => ({
      id: entry.id,
      name: entry.name,
      author: entry.owner.login,
      link: entry.html_url,
    }));
    setRenderedRows(rows);
  };

  useEffect(() => {
    renderGridRows(resultData);
  }, [resultData]);

  return (
    <div id="search-results">
      <DataGrid
        onRowClick={handleRowClick}
        className="fullscreen"
        rows={renderedRows}
        columns={columns}
        columnVisibilityModel={{
          // Hide id column by default
          id: false,
        }}
      />
    </div>
  );
}

ResultsGrid.propTypes = {
  resultData: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleRowClick: PropTypes.func.isRequired,
};

export default ResultsGrid;
