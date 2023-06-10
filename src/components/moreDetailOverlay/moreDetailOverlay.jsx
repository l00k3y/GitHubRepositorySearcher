import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import './moreDetailOverlay.css';
import { getReadmeAPI } from '../../api/api';

function MoreDetailOverlay({ selectedRepository, clearSelectionFn }) {
  const readmeDivRef = useRef();

  const getReadMe = async () => {
    const readmeHTML = await getReadmeAPI(selectedRepository);
    readmeDivRef.current.innerHTML = readmeHTML;
  };

  useEffect(() => {
    getReadMe();
  }, [selectedRepository]);

  if (selectedRepository) {
    return (
      <div id="more-detail-overlay">
        <div id="overlay-outer-contents">
          <div id="overlay-inner-contents">
            <Typography variant="body1">
              Forks:
              {' '}
              {selectedRepository.forks_count}
            </Typography>

            <Typography variant="body1">
              Open Issues:
              {' '}
              {selectedRepository.open_issues_count}
            </Typography>

            <Typography variant="body1">
              Stars:
              {' '}
              {selectedRepository.stargazers_count}
            </Typography>

            {/* <Typography sx={{ marginTop: '14px' }} variant="h6">Readme</Typography> */}

            <div ref={readmeDivRef} id="readme-container" />

            <div id="close-overlay">
              <Button onClick={() => clearSelectionFn(null)}>Close</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MoreDetailOverlay.propTypes = {
  selectedRepository: PropTypes.shape.isRequired,
  clearSelectionFn: PropTypes.func.isRequired,
};

export default MoreDetailOverlay;
