import { TextField, Button } from '@mui/material';
import { Octokit } from 'octokit';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [octokit, setOctoKit] = useState(null);

  useEffect(() => {
    const newOctokit = new Octokit({});
    setOctoKit(newOctokit);
  });

  const getRepositories = () => {
    try {
      octokit.request('GET /repositories', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }).then((response) => console.log(response));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fullscreen">
      <TextField
        label="Search Repository Name"
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
      />
      <Button onClick={getRepositories}>Search</Button>

    </div>
  );
}

export default App;
