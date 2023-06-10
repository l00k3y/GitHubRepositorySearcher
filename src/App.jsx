import { TextField, Button } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { getRepositoriesAPI } from './api/api';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

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

      <div>
        {/* <DataGrid> */}

        {JSON.stringify(results)}
        {/* </DataGrid> */}
      </div>
    </div>
  );
}

export default App;
