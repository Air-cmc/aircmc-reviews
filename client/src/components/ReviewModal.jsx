import React, { useState } from 'react';
import { Modal, InputGroup, FormControl, ProgressBar } from 'react-bootstrap';
import TitleBar from './TitleBar.jsx';

const ReviewModal = ({ ratings, show, setModal }) => {
  const [query, setQuery] = useState('');

  let categories = [];
  let catRates = [];
  if (ratings) {
    categories = Object.keys(ratings.starOptions);
    catRates = Object.values(ratings.starOptions);
  }

  return (
    <div>
      <Modal
        show={show}
        onHide={() => setModal(false)}
        centered
        animation
        className='rvw-mdl'
      >
        <Modal.Body>
          <div id='rvw-mdl-close'></div>
          <div id='rvw-mdl-grid'>
            <div>
              <TitleBar ratings={ratings} />
              <div id='rev-mdl-bars'>
                <div id='rvw-mdl-cat'>
                  {categories.map(cat => <div>{cat}</div>)}
                </div>
                <div>
                  {catRates.map(rate => (
                    <div>
                      <ProgressBar now={rate * 20}/>
                      <div id='rvw-mdl-bar-rtg'>{rate}</div>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              {/* Buttons */}
            </div>
            <div>
              <h1>Search bar</h1>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReviewModal;
