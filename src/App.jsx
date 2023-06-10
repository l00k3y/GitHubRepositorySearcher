import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { getRepositoriesAPI } from './api/api';
import './App.css';
import ResultsGrid from './components/resultsGrid/resultsGrid';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchRepositories = async () => {
    setResults([]);
    const repos = await getRepositoriesAPI(searchTerm);
    setResults(repos);
  };

  return (
    <div className="fullscreen">
      <div id="search-repository">
        <TextField
          tabIndex={0}
          id="search-repository-input"
          label="Search Repository Name"
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
        <Button id="search-button" onClick={searchRepositories}>Search</Button>
      </div>

      {results.length > 0 ? <ResultsGrid resultData={results} /> : null }
    </div>
  );
}

export default App;
