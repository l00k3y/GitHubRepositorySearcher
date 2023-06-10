import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { getRepositoriesAPI } from './api/api';
import './App.css';
import ResultsGrid from './components/resultsGrid/resultsGrid';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const searchRepositories = async () => {
    const repos = await getRepositoriesAPI(searchTerm);
    setResults(repos);
  };

  return (
    <div className="fullscreen">
      <div>
        <TextField
          label="Search Repository Name"
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
        <Button onClick={searchRepositories}>Search</Button>
      </div>

      <ResultsGrid resultData={results} />
    </div>
  );
}

export default App;
