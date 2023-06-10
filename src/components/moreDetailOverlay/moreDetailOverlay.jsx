import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function MoreDetailOverlay({ selectedRepository }) {
  if (selectedRepository) {
    return (
      <div id="overlay">
        <div id="overlay-outer-contents">
          <div id="close-overlay">
            <Button />
          </div>

          {/* <div className='overlayInnerContents'></div> */}

          {JSON.stringify(selectedRepository)}

          <div id="readme" />
        </div>
      </div>
    );
  }
}

MoreDetailOverlay.propTypes = {
  selectedRepository: PropTypes.shape.isRequired,
};

export default MoreDetailOverlay;
