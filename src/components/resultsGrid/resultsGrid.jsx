import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

function ResultsGrid({ resultData }) {
  const [renderedRows, setRenderedRows] = useState([]);

  const columns = [
    { field: 'id', hide: true },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'forks', headerName: 'Forks', width: 75 },
    { field: 'stars', headerName: 'Stars', width: 75 },
    { field: 'link', headerName: 'URL', width: 400 },
  ];

  const renderGridRows = () => {
    const rows = resultData.map((entry) => ({
      id: entry.id,
      name: entry.name,
      forks: entry.forks,
      author: entry.owner.login,
      stars: entry.stargazers_count,
      link: entry.html_url,
    }));
    setRenderedRows(rows);
  };

  useEffect(() => {
    renderGridRows(resultData);
  }, [resultData]);

  return (
    <div id="search-results">
      <DataGrid sx={{ height: '800px', width: '100%' }} rows={renderedRows} columns={columns} autoPageSize />
    </div>
  );
}

ResultsGrid.propTypes = {
  resultData: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ResultsGrid;
