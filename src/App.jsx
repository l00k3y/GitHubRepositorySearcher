import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { getRepositoriesAPI } from './api/api';
import './App.css';
import ResultsGrid from './components/resultsGrid/resultsGrid';
import MoreDetailOverlay from './components/moreDetailOverlay/moreDetailOverlay';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  // Passed to datagrid to show more detail overlay
  const handleDataGridClick = (clickedRowData) => {
    const foundRow = results.find((row) => {
      if (row.id === clickedRowData.id) return row;
      return null;
    });
    setSelectedRow(foundRow);
  };

  const searchRepositories = async () => {
    if (searchTerm) {
      setResults([]);
      const repos = await getRepositoriesAPI(searchTerm);
      setResults(repos);
    }
  };

  return (
    <>
      {selectedRow ? (
        <MoreDetailOverlay
          selectedRepository={selectedRow}
          clearSelectionFn={setSelectedRow}
        />
      ) : null}

      <div className="fullscreen">
        <div id="search-repository">
          <TextField
            tabIndex={0}
            id="search-repository-input"
            label="Search Repository Name"
            value={searchTerm}
            required
            onChange={(ev) => setSearchTerm(ev.target.value)}
          />
          <Button id="search-button" onClick={searchRepositories}>Search</Button>
          <Button id="clear-results-button" onClick={() => { setResults([]); setSelectedRow(null); }}>Clear Results</Button>
        </div>

        {results.length > 0 ? (
          <ResultsGrid
            resultData={results}
            handleRowClick={handleDataGridClick}
          />
        ) : null }
      </div>
    </>
  );
}

export default App;
