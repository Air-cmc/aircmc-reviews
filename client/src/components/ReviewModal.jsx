import React, { useState } from 'react';
import { Modal, InputGroup, FormControl, ProgressBar } from 'react-bootstrap';
import TitleBar from './TitleBar.jsx';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';


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
        dialogClassName='rvw-modal'
      >
        <div id='rvw-mdl-close'>
          <button type='button' onClick={() => setModal(false)}>
            <CloseIcon fontSize='small' />
          </button>
        </div>
        <Modal.Body>
          <div id='rvw-mdl-grid'>
            <div>
              <TitleBar ratings={ratings} />
              <div id='rvw-mdl-bars'>
                <div id='rvw-mdl-cat'>
                  {categories.map(cat => <div>{cat}</div>)}
                </div>
                <div id='rvw-mdl-progress'>
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
              <InputGroup id='rvw-modal-srch'>
                <InputGroup.Prepend>
                  <InputGroup.Text id="srch-icon"><SearchIcon /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder='Search'
                  id='rvw-srch-box'
                  onChange={(e) => setQuery(e.target.value)}
                />
              </InputGroup>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReviewModal;
